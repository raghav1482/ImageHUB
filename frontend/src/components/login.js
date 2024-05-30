import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/form.css';  
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoginStatus } from '../redux/authSlice';


const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading , setLoad] = useState(false);
  const nav = useNavigate();
  const loginStatus = useSelector(selectLoginStatus);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
        handleLogin()
        nav("/");
      }).catch(e=>{alert(e.response.data.message); console.log(e);setLoad(false);});
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
