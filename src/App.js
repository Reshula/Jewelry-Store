import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Store/Shop';
import Contact from './Contact/Contact';
import Subscribe from "./Components/Subscribe";
import AboutProduct from "./Store/AboutProduct";
import './App.css';

function App() {
  return ( <Router> 
   
  <NavBar />
  <Routes>
    <Route exat path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/> 
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/> 
    <Route path='/shop/:title' element={<AboutProduct/>} />
    
  </Routes>
  <Subscribe/>
  <Footer />
  </Router>
  );
}

export default App;
