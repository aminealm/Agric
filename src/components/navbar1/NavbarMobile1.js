import React, { useState } from 'react'
import './navbarmobile1.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {NavLink} from 'react-router-dom';

import {Link} from 'react-scroll';

function NavbarMobile1() {
  const [open,setOpen] = useState(false);

  const handleNavbaropen = () => {
    setOpen(!open)
  }


  return (
    <div className='responsive-mobile-view'>
        <div className='container-fluid mobile-view-header'>
            <p><GiHamburgerMenu size={25} onClick={handleNavbaropen}/></p>
        </div>

        {open? (<div className='mobile-nav'>
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
        </div>):null }
        
    </div>
  )
}

export default NavbarMobile1
