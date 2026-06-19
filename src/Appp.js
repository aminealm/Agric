import React from 'react'
import App from './App'
import App2 from './App2'
import Navbar1 from './components/navbar1/Navbar1';
import NavbarMobile1 from './components/navbar1/NavbarMobile1';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";


function Appp() {
  return (
    <Router>
      <div >  
        
        <Routes>
          <Route exact path='/' element={<App />}></Route>
          <Route exact path='/evnmt' element={<App2 />}  refresh="true"> </Route>
     
        </Routes> 
        <ScrollToTop smooth
      className= 'scroll'
      color="white"
      height="20"
      width="20"
      style={{borderRadius:'50%',
      
      backgroundColor:'#6bc1e9',}}/>
      </div>
    </Router>
  )
}

export default Appp
