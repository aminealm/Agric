import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="not-found__content">
        <span className="section-eyebrow">Erreur 404</span>
        <h1>Cette page n’existe pas</h1>
        <p>
          Le contenu demandé a peut-être été déplacé. Revenez à l’accueil pour
          poursuivre votre visite.
        </p>
        <Link className="btn-main" to="/">
          <BsArrowLeft aria-hidden="true" />
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
