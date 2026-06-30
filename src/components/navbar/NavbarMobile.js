import React, { useEffect, useState } from "react";
import "./navbarmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../../img/logo2.png";

function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isInnerPage = location.pathname !== "/";
  const isSolidNavbar = isScrolled || isInnerPage || open;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const goToAbout = () => {
    closeNavbar();

    if (location.pathname === "/about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/about");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
  };

  const goToReferences = () => {
    closeNavbar();

    if (location.pathname === "/references") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/references");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
  };

  const navItems = [
  {
    label: "À propos",
    onClick: goToAbout,
    active: location.pathname === "/about",
  },
  {
    label: "Secteurs",
    onClick: () => scrollToSection("sectors", -90),
  },
  {
    label: "Références",
    onClick: goToReferences,
    active: location.pathname === "/references",
  },
  {
    label: "Contact",
    onClick: () => scrollToSection("contact", -90),
  },
];

  return (
    <div className="responsive-mobile-view">
      <div className={`mobile-view-header ${isSolidNavbar ? "mobile-view-header--solid" : ""}`}>
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
                  className={`mobile-nav-link-btn ${item.active ? "active" : ""}`}
                  onClick={item.onClick}
                >
                  <span className="mobile-nav-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span>{item.label}</span>
                  {item.hasDot && <span className="mobile-nav-link-dot" aria-hidden="true" />}
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
