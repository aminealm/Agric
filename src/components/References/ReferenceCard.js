import "./ReferenceCard.css";
import { Link } from "react-router-dom";

function ReferenceCard({ reference, to }) {
  return (
    <article className="reference-card ui-card">
      <div className="reference-card-content">
        <h3>{reference.title}</h3>

        <div className="reference-bottom">
          <div className="reference-meta">
            <div>
              <span className="meta-icon">Secteur</span>
              <strong>{reference.sector}</strong>
            </div>

            <div>
              <span className="meta-icon">Pays</span>
              <strong>{reference.country}</strong>
            </div>
          </div>
        </div>
      </div>

      <Link
        className="reference-more"
        to={to}
        aria-label={`Voir la référence : ${reference.title}`}
      >
        Voir plus
      </Link>
    </article>
  );
}

export default ReferenceCard;
