import React from "react";
import "./footer.css";
import logo from "../../img/logo2.png";

function Footer() {
  return (
    <footer className="main-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src={logo}
            alt=""
            width="1080"
            height="480"
            loading="lazy"
            decoding="async"
          />

          <div>
            <strong>Agriconsulting Maroc SA</strong>
            <p>Expertise agricole, territoriale et environnementale.</p>
          </div>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Agriconsulting Maroc SA. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
