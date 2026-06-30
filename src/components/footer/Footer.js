import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer" id="footer">
      <div className="footer-inner">
        <div>
          <strong>Agriconsulting Maroc SA</strong>
          <p>Expertise agricole, territoriale et environnementale.</p>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Agriconsulting SA. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
