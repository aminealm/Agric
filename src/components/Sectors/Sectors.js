import "./Sectors.css";
import { sectors } from "./Data";

function Sectors() {
  return (
    <section className="section section--dark sectors-section" id="sectors">
      <div className="section-container">
        <div className="section-header sectors-header">
          <span className="section-eyebrow">Nos domaines</span>
          <h2>Secteurs d’intervention</h2>
          <p>
            Une expertise multisectorielle pour accompagner les projets
            agricoles, ruraux, territoriaux et environnementaux.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <article
              className="sector-item"
              key={sector.id}
              style={{ "--sector-image": `url(${sector.image})` }}
            >
              <div className="sector-content">
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </div>

              {/* <button
                type="button"
                className="sector-arrow"
                aria-label={`Voir le secteur ${sector.title}`}
              >
                ↗
              </button> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sectors;
