import React, { useState } from "react";
import "./navbarmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../../img/logo2.png";

function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeNavbar = () => {
    setOpen(false);
  };

  const scrollToSection = (sectionId, offset = -80) => {
    closeNavbar();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        const top =
          section.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/", {
      state: {
        scrollTo: sectionId,
        offset,
      },
    });
  };

  const goToReferences = () => {
    closeNavbar();

    if (location.pathname === "/references") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/references");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 0);
  };

  return (
    <div className="responsive-mobile-view">
      <div className="mobile-view-header">
        <button
          type="button"
          className="mobile-logo-btn"
          onClick={() => scrollToSection("home", -80)}
          aria-label="Go to home"
        >
          <img src={img} alt="Agriconsulting Maroc" className="mobile-logo" />
        </button>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <IoClose size={30} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <button
                type="button"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection("home", -80)}
              >
                Carrières
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection("about", -80)}
              >
                À propos de nous
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection("sectors", -80)}
              >
                Secteurs
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className={`mobile-nav-link-btn ${
                  location.pathname === "/references" ? "active" : ""
                }`}
                onClick={goToReferences}
              >
                Références
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="mobile-nav-link-btn"
                onClick={() => scrollToSection("contact", 0)}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;