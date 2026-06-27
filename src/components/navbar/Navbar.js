import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import img from "../../img/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  const isInnerPage = location.pathname !== "/";

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

  const scrollToSection = (sectionId, offset = -100) => {
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
    <nav
      className={isScrolled || isInnerPage ? "navbar-main black" : "navbar-main"}
      id="navbar"
    >
      <button
        type="button"
        className="navbar-logo-btn"
        onClick={() => scrollToSection("home", -100)}
        aria-label="Go to home"
      >
        <img src={img} alt="Agriconsulting" className="logo" />
      </button>

      <ul>
        <li className="nav-item">
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => scrollToSection("home", -100)}
          >
            Carrières
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => scrollToSection("about", -100)}
          >
            À propos de nous
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => scrollToSection("sectors", 0)}
          >
            Secteurs
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link-btn ${
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
            className="nav-link-btn"
            onClick={() => scrollToSection("contact", 0)}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;