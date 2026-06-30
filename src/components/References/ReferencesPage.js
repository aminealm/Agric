import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { references } from "./Data";
import ReferenceCard from "./ReferenceCard";
import "./ReferencesPage.css";

function ReferencesPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("all");
  const [country, setCountry] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const sectors = useMemo(() => {
    return [
      "all",
      ...new Set(references.map((item) => item.sector).filter(Boolean)),
    ];
  }, []);

  const countries = useMemo(() => {
    return [
      "all",
      ...new Set(references.map((item) => item.country).filter(Boolean)),
    ];
  }, []);

  const filteredReferences = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = references.filter((item) => {
      const title = String(item.title || "").toLowerCase();
      const id = String(item.id || "").toLowerCase();
      const itemSector = String(item.sector || "").toLowerCase();
      const client = String(item.client || "").toLowerCase();
      const funding = String(item.funding || "").toLowerCase();
      const itemCountry = String(item.country || "").toLowerCase();
      const duration = String(item.duration || "").toLowerCase();
      const partners = String(item.partners || "").toLowerCase();
      const budget = String(item.budget || "").toLowerCase();
      const year = String(item.year || "").toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        id.includes(query) ||
        itemSector.includes(query) ||
        client.includes(query) ||
        funding.includes(query) ||
        itemCountry.includes(query) ||
        duration.includes(query) ||
        partners.includes(query) ||
        budget.includes(query) ||
        year.includes(query);

      const matchesSector = sector === "all" || item.sector === sector;
      const matchesCountry = country === "all" || item.country === country;

      return matchesSearch && matchesSector && matchesCountry;
    });

    return [...result].sort((a, b) => {
      const yearA = Number(a.year || 0);
      const yearB = Number(b.year || 0);
      const idA = Number(a.id || 0);
      const idB = Number(b.id || 0);

      if (sortBy === "oldest") return yearA - yearB || idA - idB;

      if (sortBy === "title") {
        return String(a.title || "").localeCompare(String(b.title || ""));
      }

      return yearB - yearA || idB - idA;
    });
  }, [search, sector, country, sortBy]);

  const visibleReferences = filteredReferences.slice(0, visibleCount);
  const hasMoreReferences = visibleCount < filteredReferences.length;

  const resetVisibleCount = () => {
    setVisibleCount(6);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    resetVisibleCount();
  };

  const handleSectorChange = (event) => {
    setSector(event.target.value);
    resetVisibleCount();
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    resetVisibleCount();
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    resetVisibleCount();
  };

  const resetFilters = () => {
    setSearch("");
    setSector("all");
    setCountry("all");
    setSortBy("latest");
    setVisibleCount(6);
  };

  const loadMoreReferences = () => {
    setVisibleCount((current) => current + 6);
  };

  return (
    <main className="references-page">
      <section className="references-page-hero">
        <div className="section-container--wide references-page-hero-content">
          <span className="section-eyebrow">Nos réalisations</span>
          <h1>Nos références</h1>

          <div className="references-page-toolbar">
            <label className="references-search" aria-label="Rechercher une référence">
              <input
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Rechercher"
              />
            </label>

            <button
              type="button"
              className={`references-filter-btn ${filtersOpen ? "active" : ""}`}
              onClick={() => setFiltersOpen((value) => !value)}
            >
              + Filtres
            </button>

            <label className="references-sort">
              <span>Trier par</span>

              <select value={sortBy} onChange={handleSortChange}>
                <option value="latest">Plus récents</option>
                <option value="oldest">Plus anciens</option>
                <option value="title">Titre</option>
              </select>
            </label>
          </div>

          {filtersOpen && (
            <div className="references-filter-panel">
              <label>
                Secteur
                <select value={sector} onChange={handleSectorChange}>
                  {sectors.map((item) => (
                    <option value={item} key={item}>
                      {item === "all" ? "Tous les secteurs" : item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Pays
                <select value={country} onChange={handleCountryChange}>
                  {countries.map((item) => (
                    <option value={item} key={item}>
                      {item === "all" ? "Tous les pays" : item}
                    </option>
                  ))}
                </select>
              </label>

              <button type="button" onClick={resetFilters}>
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="references-page-results">
        <div className="section-container--wide">
          <p className="references-results-count">
            {filteredReferences.length} résultat
            {filteredReferences.length > 1 ? "s" : ""}
          </p>

          {filteredReferences.length > 0 ? (
            <>
              <div className="references-list-grid">
                {visibleReferences.map((reference) => (
                  <ReferenceCard
                    key={reference.id}
                    reference={reference}
                    onMoreClick={() =>
                      navigate(`/references?selected=${reference.id}`)
                    }
                  />
                ))}
              </div>

              {hasMoreReferences && (
                <div className="references-load-more-wrapper">
                  <button
                    type="button"
                    className="btn-main references-load-more-btn"
                    onClick={loadMoreReferences}
                  >
                    + Voir plus
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="references-empty-state ui-card">
              <h2>Aucune référence trouvée</h2>
              <p>Essayez un autre mot-clé ou réinitialisez les filtres.</p>

              <button type="button" className="btn-secondary" onClick={resetFilters}>
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ReferencesPage;
