import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  BsArrowRight,
  BsCheck2Circle,
  BsGrid3X3Gap,
  BsLayers,
} from "react-icons/bs";
import { sectors } from "./Data";
import "./SectorsPage.css";

function SectorsPage() {
  const pageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(() => new Set());
  const activeSector = sectors[activeIndex];

  const sectorStats = useMemo(
    () => [
      { label: "Domaines", value: sectors.length },
   
      { label: "Vision", value: "Durable" },
    ],
    []
  );

  const isVisible = (key) => visibleItems.has(key);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const revealItems = root.querySelectorAll("[data-sector-reveal-key]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const key = entry.target.dataset.sectorRevealKey;
          if (key) {
            setVisibleItems((current) => {
              if (current.has(key)) return current;

              const next = new Set(current);
              next.add(key);
              return next;
            });
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sectors.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="sectors-page" ref={pageRef}>
      <section className="sectors-page-hero">
        <div className="sectors-page-container sectors-page-hero__grid">
          <div
            className={`sectors-page-hero__copy ${
              isVisible("hero-copy") ? "is-visible" : ""
            }`}
            data-sector-reveal="left"
            data-sector-reveal-key="hero-copy"
          >
            <span className="section-eyebrow">Nos domaines</span>
            <h1>Secteurs d'intervention</h1>
            <p>
              Une lecture transversale des territoires, des ressources et des
              filieres pour accompagner les projets agricoles, ruraux,
              institutionnels et environnementaux.
            </p>

            <div className="sectors-page-stats" aria-label="Resume des secteurs">
              {sectorStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`sectors-page-visual ${
              isVisible("hero-visual") ? "is-visible" : ""
            }`}
            data-sector-reveal="right"
            data-sector-reveal-key="hero-visual"
            aria-live="polite"
          >
            <div className="sectors-page-visual__image-wrap">
              <img src={activeSector.image} alt={activeSector.title} />
            </div>
            <div className="sectors-page-visual__content">
              <span>{String(activeSector.id).padStart(2, "0")}</span>
              <h2>{activeSector.title}</h2>
              <p>{activeSector.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectors-page-list" aria-label="Liste des secteurs">
        <div className="sectors-page-container">
          <div
            className={`sectors-page-toolbar ${
              isVisible("toolbar") ? "is-visible" : ""
            }`}
            data-sector-reveal="up"
            data-sector-reveal-key="toolbar"
          >
            <div>
              <span className="sectors-page-kicker">
                <BsGrid3X3Gap aria-hidden="true" /> Expertise multisectorielle
              </span>
              <h2>Explorez les champs d'action</h2>
            </div>
            <p>
              Chaque secteur combine analyse, assistance technique, coordination
              terrain et accompagnement institutionnel.
            </p>
          </div>

          <div className="sectors-page-grid">
            {sectors.map((sector, index) => {
              const revealKey = `sector-${sector.id}`;

              return (
                <article
                  className={`sectors-page-card ${
                    index === activeIndex ? "is-active" : ""
                  } ${isVisible(revealKey) ? "is-visible" : ""}`}
                  key={sector.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                  data-sector-reveal={index % 2 === 0 ? "left" : "right"}
                  data-sector-reveal-key={revealKey}
                  style={{ "--delay": `${index * 80}ms` }}
                >
                  <div className="sectors-page-card__media">
                    <img src={sector.image} alt="" loading="lazy" />
                  </div>

                  <div className="sectors-page-card__body">
                    <div className="sectors-page-card__top">
                      <span>{String(sector.id).padStart(2, "0")}</span>
                      <BsLayers aria-hidden="true" />
                    </div>

                    <h3>{sector.title}</h3>
                    <p>{sector.description}</p>

                    <div className="sectors-page-card__footer">
                      <span>
                        <BsCheck2Circle aria-hidden="true" /> Conseil & assistance
                      </span>
                      <BsArrowRight aria-hidden="true" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SectorsPage;