import React, { useEffect, useMemo, useState } from "react";
import "./contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { getContactInfo } from "../../services/contentApi";

const defaultContact = {
  companyName: "Agriconsulting Maroc SA",
  addressLine1: "24, Avenue de France",
  addressLine2: "App 10 (3ème étage), Agdal - Rabat, Maroc",
  phone: "+212 5 376 52 32",
  fax: "+212 5 376 52 33",
  email: "info@agriconsulting-ma.com",
  latitude: "33.9981346",
  longitude: "-6.8469296",
};

function toTelHref(value) {
  return `tel:${String(value || "").replace(/[^+\d]/g, "")}`;
}

function Contact() {
  const [contact, setContact] = useState(defaultContact);

  useEffect(() => {
    let isMounted = true;

    getContactInfo()
      .then((item) => {
        if (isMounted) setContact({ ...defaultContact, ...item });
      })
      .catch(() => {
        // Keep bundled contact details visible if the API is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const mapSrc = useMemo(() => {
    const latitude = contact.latitude || defaultContact.latitude;
    const longitude = contact.longitude || defaultContact.longitude;

    return `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
  }, [contact.latitude, contact.longitude]);

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
            <span className="contact-small-title">{contact.companyName}</span>

            <h3>Nous sommes à votre écoute</h3>

            <p className="contact-description">
              Contactez-nous pour vos projets agricoles, territoriaux,
              environnementaux ou institutionnels.
            </p>

            <address className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Adresse</h4>
                  <p>
                    {contact.companyName}
                    <br />
                    {contact.addressLine1}
                    <br />
                    {contact.addressLine2}
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon" aria-hidden="true">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4>Téléphone</h4>
                  <p>
                    <a href={toTelHref(contact.phone)}>{contact.phone}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon" aria-hidden="true">
                  <FaFax />
                </div>

                <div>
                  <h4>Fax</h4>
                  <p>
                    <a href={toTelHref(contact.fax)}>{contact.fax}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon" aria-hidden="true">
                  <FaEnvelope />
                </div>

                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </div>
              </div>
            </address>

            <a
              href={`mailto:${contact.email}`}
              className="btn-main contact-email-btn"
            >
              <FaEnvelope aria-hidden="true" />
              Envoyez un mail
              <FaArrowRight className="contact-arrow" aria-hidden="true" />
            </a>
          </div>

          <div className="contact-map-panel">
            <iframe
              title="Carte de localisation d’Agriconsulting Maroc à Rabat"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-floating-card">
              <strong>{contact.companyName}</strong>
              <span>{contact.addressLine1}, Agdal - Rabat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
