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
      const itemCountry = String(item.country || "").toLowerCase();
      const year = String(item.year || "").toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        id.includes(query) ||
        itemSector.includes(query) ||
        itemCountry.includes(query) ||
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
        <div className="references-page-container references-page-hero-content">
          <h1>Our references</h1>

          <div className="references-page-toolbar">
            <label className="references-search" aria-label="Search references">
              <input
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search"
              />
            </label>

            <button
              type="button"
              className={`references-filter-btn ${filtersOpen ? "active" : ""}`}
              onClick={() => setFiltersOpen((value) => !value)}
            >
              + Filters
            </button>

            <label className="references-sort">
              <span>Sort by</span>

              <select value={sortBy} onChange={handleSortChange}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="title">Title</option>
              </select>
            </label>
          </div>

          {filtersOpen && (
            <div className="references-filter-panel">
              <label>
                Sector
                <select value={sector} onChange={handleSectorChange}>
                  {sectors.map((item) => (
                    <option value={item} key={item}>
                      {item === "all" ? "All sectors" : item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Country
                <select value={country} onChange={handleCountryChange}>
                  {countries.map((item) => (
                    <option value={item} key={item}>
                      {item === "all" ? "All countries" : item}
                    </option>
                  ))}
                </select>
              </label>

              <button type="button" onClick={resetFilters}>
                Reset
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="references-page-results">
        <div className="references-page-container">
          <p className="references-results-count">
            {filteredReferences.length} results
          </p>

          {filteredReferences.length > 0 ? (
            <>
              <div className="references-list-grid">
                {visibleReferences.map((reference) => (
                  <ReferenceCard
                    key={reference.id}
                    reference={reference}
                    showId={true}
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
                    className="references-load-more-btn"
                    onClick={loadMoreReferences}
                  >
                    + Voir plus
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="references-empty-state">
              <h2>No references found</h2>
              <p>Try another search keyword or reset the filters.</p>

              <button type="button" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ReferencesPage;