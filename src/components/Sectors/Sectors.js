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
            >
              <img
                className="sector-item__image"
                src={sector.image}
                alt=""
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />

              <div className="sector-content">
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sectors;
