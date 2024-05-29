import './App.css';
import Home from './components/home';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/signup';
import Gallery from './components/gallery';
import Upload from './components/upload';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useAuth } from './authContext';
import { useEffect } from 'react';
function App() {
  const {login} = useAuth();
  const userdat = sessionStorage.getItem("User")
  useEffect(()=>{
    if(userdat!=null){
      login();
    }
  },[])
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path={`/` } element={<Home srv='https://imagehub-s7uw.onrender.com'/>}></Route>
          <Route path={`/login` } element={<Login srv='https://imagehub-s7uw.onrender.com'/>}></Route>
          <Route path={`/signup` } element={<Signup srv='https://imagehub-s7uw.onrender.com'/>}></Route>
          <Route path={`/gallery` } element={<Gallery srv='https://imagehub-s7uw.onrender.com'/>}></Route>
          <Route path={`/upload` } element={<Upload srv='https://imagehub-s7uw.onrender.com'/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
