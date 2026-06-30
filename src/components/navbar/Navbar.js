import React from "react";
import "./Navbar.css";
import img from "../../img/logo2.png";
import { useNavbarNavigation } from "./useNavbarNavigation";

const Navbar = () => {
  const { isScrolled, navItems, scrollToSection } = useNavbarNavigation({
    sectionOffset: -96,
  });

  return (
    <nav
      className={`navbar-main ${isScrolled ? "navbar-main--solid" : ""}`}
      id="navbar"
    >
      <div className="navbar-shell">
        <button
          type="button"
          className="navbar-logo-btn"
          onClick={() => scrollToSection("home", -96)}
          aria-label="Aller à l'accueil"
        >
          <img src={img} alt="Agriconsulting Maroc" className="navbar-logo" />
        </button>

        <ul className="navbar-links" aria-label="Navigation principale">
          {navItems.map((item) => (
            <li className="navbar-link-item" key={item.label}>
              <button
                type="button"
                className={`nav-link-btn ${item.active ? "active" : ""}`}
                onClick={item.onClick}
              >
                <span className="nav-link-arrow" aria-hidden="true">
                  ↗
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
