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
    <section id="contact" className="section contact-section">
      <div className="section-container contact-container">
        <div className="section-header contact-title">
          <span className="section-eyebrow">Contact</span>
          <h2>Parlons de votre prochain projet</h2>
          <p>
            Notre équipe reste à votre disposition pour toute demande
            d'information, d'étude ou de collaboration.
          </p>
        </div>

        <div className="contact-card ui-card">
          <div className="contact-info-panel">
            <span className="contact-small-title">Agriconsulting Maroc SA</span>

            <h3>Nous sommes à votre écoute</h3>

            <p className="contact-description">
              Contactez-nous pour vos projets agricoles, territoriaux,
              environnementaux ou institutionnels.
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
                    Immeuble 80
                    <br />
                    Rue Oued Tensift, Agdal - Rabat, Maroc
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
              className="btn-main contact-email-btn"
            >
              <FaEnvelope />
              Envoyez un mail
              <FaArrowRight className="contact-arrow" />
            </a>
          </div>

          <div className="contact-map-panel">
            <iframe
              title="Agriconsulting Maroc Map"
              src="https://maps.google.com/maps?q=33.9981346,-6.8469296&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-floating-card">
              <strong>Agriconsulting Maroc SA</strong>
              <span>Immeuble 80, Rue Oued Tensift</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
