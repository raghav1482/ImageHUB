import './App.css';
import Home from './components/home';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoginStatus } from './redux/authSlice';
import Signup from './components/signup';
import Gallery from './components/gallery';
import Upload from './components/upload';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useEffect } from 'react';
function App() {
  const loginStatus = useSelector(selectLoginStatus);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };
  const userdat = sessionStorage.getItem("User")
  useEffect(()=>{
    if(userdat!=null){
      handleLogin();
    }
  },[])
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path={`/` } element={<Home srv='https://image-hub-pszo.vercel.app'/>}></Route>
          <Route path={`/login` } element={<Login srv='https://image-hub-pszo.vercel.app'/>}></Route>
          <Route path={`/signup` } element={<Signup srv='https://image-hub-pszo.vercel.app'/>}></Route>
          <Route path={`/gallery` } element={<Gallery srv='https://image-hub-pszo.vercel.app'/>}></Route>
          <Route path={`/upload` } element={<Upload srv='https://image-hub-pszo.vercel.app'/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
