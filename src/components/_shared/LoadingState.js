import logo from "../../img/logo2.png";

function LoadingState({ label = "Préparation du contenu…" }) {
  return (
    <main
      className="route-loading"
      id="main-content"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="route-loading__inner">
        <img
          className="route-loading__logo"
          src={logo}
          width="286"
          height="94"
          alt=""
        />

        <div className="route-loading__signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <p>{label}</p>

        <div className="route-loading__skeleton" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  );
}

export default LoadingState;
