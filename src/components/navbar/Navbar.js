import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import img from "../../img/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const isSolidNavbar = isScrolled;

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

  const scrollToSection = (sectionId, offset = -96) => {
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
    <nav
      className={`navbar-main ${isSolidNavbar ? "navbar-main--solid" : ""}`}
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
