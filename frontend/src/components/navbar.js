import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectImgArr, selectLoginStatus } from '../redux/authSlice';

const Navbar = () => {
  const loginStatus = useSelector(selectLoginStatus);
  const imgarr = useSelector(selectImgArr);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <a class="navbar-brand" href="/">ImageHUB</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" href="/gallery">Gallery</a>
      </li>
{loginStatus && <li class="nav-item">
        <a class="nav-link" href="/upload">Upload</a>
      </li>}
{    !loginStatus &&  <li class="nav-item">
        <a class="nav-link" href="/login">Login/SignUP</a>
      </li>}
{    loginStatus &&  <li class="nav-item">
        <a class="nav-link" href="/" onClick={()=>{handleLogout();sessionStorage.clear()}}>Logout</a>
      </li>}
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
