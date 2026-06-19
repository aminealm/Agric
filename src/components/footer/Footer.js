import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer" id="footer">
      <div className="footer-bottom">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Agriconsulting SA</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;