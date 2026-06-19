import React, { useState } from "react";
import "./navbarmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import img from "../../img/ameigr blanc.png";

function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <div className="responsive-mobile-view">
      <div className="mobile-view-header">
        <Link to="home" spy smooth offset={-80} duration={300} onClick={closeNavbar}>
          <img src={img} alt="Agriconsulting Maroc" className="mobile-logo" />
        </Link>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
          {open ? <IoClose size={30} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <Link to="home" spy smooth offset={-80} duration={300} onClick={closeNavbar}>
                Carrières
              </Link>
            </li>

            <li className="nav-item">
              <Link to="about" spy smooth offset={-80} duration={300} onClick={closeNavbar}>
                À propos de nous
              </Link>
            </li>

            <li className="nav-item">
              <Link to="sectors" spy smooth offset={-80} duration={300} onClick={closeNavbar}>
                Secteurs
              </Link>
            </li>

            <li className="nav-item">
              <Link to="references" spy smooth offset={-80} duration={300} onClick={closeNavbar}>
                Références
              </Link>
            </li>

            <li className="nav-item">
              <Link to="contact" spy smooth offset={80} duration={300} onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;