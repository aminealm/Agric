import React from 'react'
import './footer1.css'
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import {Link} from 'react-scroll';

function Footer1() {
  return (
    <div className='container-fluide main-footer' > 
        <div className='container-fluide ' id='footer'>
       
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-contact">
            <h3>AMEIGR</h3>
            <p>
                 Madinat Al Irfane, B.P. 6202.  <br/>
                 Rabat,<br/>
                 Maroc<br/><br/>
              
            </p>
          </div>

          

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Contact</h4>
            <ul>
            <li><strong>Phone:</strong> +212 6 43 49 22 34<br/></li>
            <li><strong>Email:</strong> ameigr@iav.ac.ma<br/></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Pour rejoindre nous, n'hésiter pas a nous suivre dans les réseaux sociaux.</p>
            <div class="social-links mt-3">
              <a href="https://www.youtube.com/@ameigr-elevesingenieurseng3839" class="twitter" target="_blank" rel="noreferrer"><i class="fa fa-youtube"></i></a>
              <a href="https://www.facebook.com/AMEIGR" class="facebook" target="_blank" rel="noreferrer" ><i class="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/ameigr_officiel/?hl=fr" target="_blank" rel="noreferrer" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/ameigr/" target="_blank" rel="noreferrer" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>

          

        </div>
      </div>
    </div>
    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>AMEIGR</span></strong>. All Rights Reserved
      </div>
      
    </div>

        </div>
       
      
    </div>
  )
}

export default Footer1
