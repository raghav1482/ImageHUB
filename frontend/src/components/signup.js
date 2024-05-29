import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/form.css';  // Make sure this file exists and is correctly imported
import axios from 'axios';

const Signup = (props) => {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [loading , setLoad] = useState(false);
  const nav = useNavigate();
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const response = await axios.post(`${props.srv}/auth/register`, user);
      alert('Registration Successful');
      setUser({ username: '', email: '', password: '' });
      setLoad(false);
      nav("/login")
    } catch (error) {
      console.error('Error signing up:', error);
      setLoad(false);
      alert('Error Signing Up');
    }
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          name='username'
          placeholder='Enter username...'
          id='username'
          value={user.username}
          onChange={handleChange}
          required
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          placeholder='Enter email...'
          id='email'
          value={user.email}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter password...'
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>{(loading==false)?"SignUp":<span class="loader"></span>}</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
