import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import img from "../../img/logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "navbar-main black" : "navbar-main"} id="navbar">
      <Link to="home" spy smooth offset={-100} duration={300}>
        <img src={img} alt="Ameigr" className="logo" />
      </Link>

      <ul>
        <li className="nav-item">
          <Link to="home" spy smooth offset={-100} duration={300}>
            Carrières
          </Link>
        </li>

        <li className="nav-item">
          <Link to="about" spy smooth offset={-100} duration={300}>
            À propos de nous
          </Link>
        </li>

        <li className="nav-item">
          <Link to="sectors" spy smooth offset={0} duration={300}>
            Secteurs
          </Link>
        </li>

        <li className="nav-item">
          <Link to="references" spy smooth offset={-100} duration={300}>
            Références
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link to="sponsors" spy smooth offset={-100} duration={300}>
            Actualités
          </Link>
        </li> */}

        
        <li className="nav-item">
          <Link to="contact" spy smooth offset={0} duration={300}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;