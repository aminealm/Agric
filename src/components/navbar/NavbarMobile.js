import React, { useCallback, useState } from "react";
import "./navbarmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import img from "../../img/logo2.png";
import { useNavbarNavigation } from "./useNavbarNavigation";

function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const closeNavbar = useCallback(() => setOpen(false), []);

  const { isInnerPage, isScrolled, navItems, scrollToSection } =
    useNavbarNavigation({
      onNavigate: closeNavbar,
      sectionOffset: -80,
    });

  const isSolidNavbar = isScrolled || isInnerPage || open;

  return (
    <div className="responsive-mobile-view">
      <div
        className={`mobile-view-header ${
          isSolidNavbar ? "mobile-view-header--solid" : ""
        }`}
      >
        <button
          type="button"
          className="mobile-logo-btn"
          onClick={() => scrollToSection("home", -80)}
          aria-label="Aller à l'accueil"
        >
          <img src={img} alt="Agriconsulting Maroc" className="mobile-logo" />
        </button>

        <div className="mobile-actions">
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-label="Ouvrir ou fermer le menu"
            aria-expanded={open}
          >
            {open ? <IoClose size={30} /> : <GiHamburgerMenu size={27} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <ul>
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <button
                  type="button"
                  className={`mobile-nav-link-btn ${
                    item.active ? "active" : ""
                  }`}
                  onClick={item.onClick}
                >
                  <span className="mobile-nav-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
