import React from "react";
import "./contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-title">
          <h2>CONTACT</h2>
          <span></span>
        </div>

        <div className="contact-card">
          <div className="contact-info-panel">
            <span className="contact-small-title">Nous contacter</span>

            <h3>
              Parlons de votre
              <br />
              prochain projet
            </h3>

            <p className="contact-description">
              Notre équipe reste à votre disposition pour toute demande
              d’information ou collaboration.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Adresse</h4>
                  <p>
                    Agriconsulting Maroc SA
                    <br />
                    Immeuble 80, Appartement n°11,
                    <br />
                    Rue Oued Tensift, Agdal, Rabat
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4>Téléphone</h4>
                  <p>+212 5 376 52 32</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <FaFax />
                </div>

                <div>
                  <h4>Fax</h4>
                  <p>+212 5 376 52 33</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:contact@agriconsulting.ma"
              className="contact-email-btn"
            >
              <FaEnvelope />
              Envoyez un mail
              <FaArrowRight className="contact-arrow" />
            </a>
          </div>

          <div className="contact-map-panel">
            <iframe
              title="Agriconsulting Maroc Map"
              src="https://maps.google.com/maps?q=Immeuble%2080%20Rue%20Oued%20Tensift%20Agdal%20Rabat%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="map-floating-card">
              <strong>Agriconsulting Maroc SA</strong>
              <span>Agdal, Rabat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;