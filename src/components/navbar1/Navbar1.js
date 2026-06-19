import React,{useState} from "react";
import "./Navbar1.css"
import {Link} from 'react-scroll';
import img from '../../img/ameigr blanc.png' ;
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import {Link as Link1} from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";


const Navbar = ()=>{
  

      $(window).scroll(function(){
        if ($(window).scrollTop()){
            $('nav').addClass('black')
        }else {
            $('nav').removeClass('black')
        }
      })
     
    
    return(
        
        <nav className="navbar-main " id="navbar" >
            
            <img src={img} alt="Ameigr" class="logo"/>
            <ul>
                <li className="nav-item-1" >
                <NavLink  onClick={() => {window.location.href="/"}}>
                   
                            Home
                </NavLink>
                
                    
                </li>  
                
                
              
               
               
                
                <li className="nav-item">
                <Link to='evnmt-home' spy={true} smooth={true} offset={-110} duration={100}>

                    
                    <NavLink className="nav-link" >Event</NavLink>
                    </Link>
                </li>
              
                
                

                

                

                
                

                

                

                
            </ul>
           

        </nav>
        
    )
}

export default Navbar;