import "./Sectors.css";
import { sectors } from "./Data";

function Sectors() {
  return (
    <section className="sectors-section" id="sectors">
      <div className="container">
        <div className="sectors-title">
          <h2>Secteurs</h2>
        </div>

        <span className="line"></span>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <div
              className="sector-item"
              key={sector.id}
              style={{ "--sector-image": `url(${sector.image})` }}
            >
              <div className="sector-content">
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </div>

              <button className="sector-arrow">↗</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sectors;