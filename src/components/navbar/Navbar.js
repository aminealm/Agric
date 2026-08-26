import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../img/logo2.png";
import { useNavbarNavigation } from "./useNavbarNavigation";

const Navbar = () => {
  const { handleHomeClick, isScrolled, navItems } = useNavbarNavigation({
    sectionOffset: -96,
  });

  return (
    <nav
      className={`navbar-main ${isScrolled ? "navbar-main--solid" : ""}`}
      id="navbar"
    >
      <div className="navbar-shell">
        <Link
          to="/"
          className="navbar-logo-btn"
          onClick={handleHomeClick}
          aria-label="Aller à l'accueil"
        >
          <img
            src={img}
            alt=""
            className="navbar-logo"
            width="1080"
            height="480"
          />
        </Link>

        <ul className="navbar-links" aria-label="Navigation principale">
          {navItems.map((item) => (
            <li className="navbar-link-item" key={item.label}>
              <Link
                to={item.to}
                state={item.state}
                className={`nav-link-btn ${item.active ? "active" : ""}`}
                onClick={item.onClick}
                aria-current={item.active ? "page" : undefined}
              >
                <span className="nav-link-arrow" aria-hidden="true">
                  ↗
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
