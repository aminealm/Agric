import "./ReferenceCard.css";

function ReferenceCard({ reference, onMoreClick }) {
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

      <button type="button" className="reference-more" onClick={onMoreClick}>
        Voir plus
      </button>
    </article>
  );
}

export default ReferenceCard;
