import "./ReferenceCard.css";

function ReferenceCard({ reference, showId = false, onMoreClick }) {
  return (
    <article className="reference-card">
      <div className="reference-card-content">
        {showId && (
          <span className="reference-card-id">{reference.id}</span>
        )}

        <h3>{reference.title}</h3>

        <div className="reference-bottom">
          <div className="reference-meta">
            <div>
              <span className="meta-icon">▧</span>
              <strong>{reference.sector}</strong>
            </div>

            <div>
              <span className="meta-icon">⌖</span>
              <strong>{reference.country}</strong>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="reference-more" onClick={onMoreClick}>
        ↗ Voir plus
      </button>
    </article>
  );
}

export default ReferenceCard;