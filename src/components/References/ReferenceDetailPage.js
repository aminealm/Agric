import { Link, useParams } from "react-router-dom";
import {
  BsArrowLeft,
  BsArrowUpRight,
  BsBank,
  BsBriefcase,
  BsCalendar3,
  BsCashStack,
  BsGeoAlt,
  BsPeople,
} from "react-icons/bs";
import { references } from "./Data";
import "./ReferenceDetailPage.css";

const detailItems = [
  { key: "sector", label: "Secteur", icon: BsBriefcase },
  { key: "country", label: "Pays", icon: BsGeoAlt },
  { key: "duration", label: "Duree", icon: BsCalendar3 },
  { key: "funding", label: "Financement", icon: BsBank },
  { key: "budget", label: "Budget", icon: BsCashStack },
];

function ReferenceDetailPage() {
  const { id } = useParams();
  const reference = references.find((item) => String(item.id) === id);

  if (!reference) {
    return (
      <main className="reference-detail-page">
        <section className="reference-detail-hero reference-detail-hero--empty">
          <div className="reference-detail-container">
            <nav className="reference-detail-breadcrumb" aria-label="Fil d'ariane">
              <Link to="/references">
                <BsArrowUpRight aria-hidden="true" />
                References
              </Link>
              <span>Introuvable</span>
            </nav>

            <h1>Reference introuvable</h1>
            <p className="reference-detail-lead">
              Cette reference n'existe pas ou n'est plus disponible dans la
              liste actuelle.
            </p>

            <Link className="reference-detail-back" to="/references">
              <BsArrowLeft aria-hidden="true" />
              Retour aux references
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="reference-detail-page">
      <section className="reference-detail-hero">
        <div className="reference-detail-container">
          <nav className="reference-detail-breadcrumb" aria-label="Fil d'ariane">
            <Link to="/references">
              <BsArrowUpRight aria-hidden="true" />
              References
            </Link>
            <span>
              <BsArrowUpRight aria-hidden="true" />
              {String(reference.id).padStart(2, "0")}
            </span>
          </nav>

          <h1>{reference.title}</h1>

          <div className="reference-detail-meta" aria-label="Details de la reference">
            {detailItems.map(({ key, label, icon: Icon }) => (
              <div className="reference-detail-meta-item" key={key}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
                <strong>{reference[key]}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reference-detail-body">
        <div className="reference-detail-container reference-detail-grid">
          <article className="reference-detail-story">
            <span className="section-eyebrow">Mission</span>
            <h2>Informations de reference</h2>
            <p>
              {reference.client} a mobilise cette mission dans le secteur{" "}
              <strong>{reference.sector}</strong>, avec un financement{" "}
              <strong>{reference.funding}</strong>. La reference couvre une
              intervention en {reference.country}, sur la periode{" "}
              {reference.duration}.
            </p>
          </article>

          <aside className="reference-detail-panel ui-card" aria-label="Fiche reference">
            <div className="reference-detail-panel-header">
              <span>Fiche projet</span>
              <strong>{reference.year}</strong>
            </div>

            <dl>
              <div>
                <dt>Client</dt>
                <dd>{reference.client}</dd>
              </div>
              <div>
                <dt>Partenaires</dt>
                <dd>
                  <BsPeople aria-hidden="true" />
                  {reference.partners}
                </dd>
              </div>
              <div>
                <dt>Pays</dt>
                <dd>{reference.country}</dd>
              </div>
              <div>
                <dt>Budget</dt>
                <dd>{reference.budget}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default ReferenceDetailPage;
