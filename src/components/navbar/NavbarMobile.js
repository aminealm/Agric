import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbarmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import img from "../../img/logo2.png";
import { useNavbarNavigation } from "./useNavbarNavigation";

function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const closeNavbar = useCallback(() => setOpen(false), []);

  const { handleHomeClick, isInnerPage, isScrolled, navItems } =
    useNavbarNavigation({
      onNavigate: closeNavbar,
      sectionOffset: -80,
    });

  const isSolidNavbar = isScrolled || isInnerPage || open;

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("mobile-menu-open");
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="responsive-mobile-view">
      <div
        className={`mobile-view-header ${
          isSolidNavbar ? "mobile-view-header--solid" : ""
        }`}
      >
        <Link
          to="/"
          className="mobile-logo-btn"
          onClick={handleHomeClick}
          aria-label="Aller à l'accueil"
        >
          <img
            src={img}
            alt=""
            className="mobile-logo"
            width="1080"
            height="480"
          />
        </Link>

        <div className="mobile-actions">
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <IoClose size={30} /> : <GiHamburgerMenu size={27} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Navigation principale"
        >
          <ul>
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <Link
                  to={item.to}
                  state={item.state}
                  className={`mobile-nav-link-btn ${
                    item.active ? "active" : ""
                  }`}
                  onClick={item.onClick}
                  aria-current={item.active ? "page" : undefined}
                >
                  <span className="mobile-nav-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavbarMobile;
