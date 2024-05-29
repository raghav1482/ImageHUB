import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/form.css';  // Import the CSS file
import axios from "axios"
import { useAuth } from '../authContext';
const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading , setLoad] = useState(false);
  const nav = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoad(true);
      axios.post(`${props.srv}/auth/login`,user).then((result)=>{
        console.log(result);
        const usrdat = JSON.stringify(result.data);
        sessionStorage.setItem("User",usrdat);
        setLoad(false);
        login()
        nav("/");
      }).catch(e=>{alert("Error logging in"); console.log(e);setLoad(false);});
    };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type='email'
          name='email'
          placeholder='Enter email...'
          id="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type='password'
          name='password'
          id="password"
          placeholder='Enter password...'
          onChange={handleChange}
          required
        />
        <button type='submit'>{(loading==false)?"Login":<span class="loader"></span>}</button>
        <p>Don't have an account? <Link to="/signup">Register Now</Link></p>
      </form>
    </div>
  );
};

export default Login;
