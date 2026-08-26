import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { references } from "../References/Data";

const SITE_URL = "https://agriconsulting-maroc.ma";
const SOCIAL_IMAGE = `${SITE_URL}/og-image.jpg`;

const pageMeta = {
  "/": {
    title: "Agriconsulting Maroc SA",
    description:
      "Agriconsulting Maroc SA accompagne les acteurs publics et privés en conseil, études et assistance technique agricole au Maroc et en Afrique.",
    label: "Accueil",
  },
  "/about": {
    title: "À propos d’Agriconsulting Maroc SA",
    description:
      "Découvrez Agriconsulting Maroc SA, société de conseil fondée en 2002, son équipe et son expertise en agriculture et développement durable.",
    label: "À propos",
  },
  "/secteurs": {
    title: "Secteurs d’intervention | Agriconsulting Maroc",
    description:
      "Nos expertises couvrent l’agriculture, le développement rural, l’environnement, les chaînes de valeur et la planification territoriale.",
    label: "Secteurs d’intervention",
  },
  "/references": {
    title: "Références et projets | Agriconsulting Maroc",
    description:
      "Découvrez les missions d’assistance technique, études et projets réalisés par Agriconsulting Maroc au Maroc et en Afrique.",
    label: "Références",
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function getReferenceMeta(pathname) {
  const match = pathname.match(/^\/references\/(\d+)$/);
  if (!match) return null;

  const reference = references.find((item) => String(item.id) === match[1]);
  if (!reference) return null;

  return {
    title: `Projet ${reference.id} · ${reference.country} | Agriconsulting Maroc`,
    description: `${reference.title} Mission menée dans le secteur ${reference.sector} pour ${reference.client}.`,
    label: `Référence ${String(reference.id).padStart(2, "0")}`,
    reference,
  };
}

function ensureMeta(selector, attributes) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function ensureCanonical(href) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

function updateStructuredData({ canonicalUrl, meta, pathname }) {
  let script = document.getElementById("page-structured-data");

  if (!script) {
    script = document.createElement("script");
    script.id = "page-structured-data";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      inLanguage: "fr-MA",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  if (pathname !== "/") {
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${SITE_URL}/`,
      },
    ];

    if (meta.reference) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: "Références",
        item: `${SITE_URL}/references`,
      });
    }

    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: meta.label,
      item: canonicalUrl,
    });

    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });
  }

  if (meta.reference) {
    graph.push({
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#project`,
      name: meta.reference.title,
      description: meta.description,
      spatialCoverage: meta.reference.country,
      dateCreated: String(meta.reference.year),
      creator: { "@id": `${SITE_URL}/#organization` },
    });
  }

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

function Seo() {
  const location = useLocation();

  useEffect(() => {
    const pathname = normalizePath(location.pathname);
    const referenceMeta = getReferenceMeta(pathname);
    const meta = referenceMeta || pageMeta[pathname];
    const isIndexable = Boolean(meta);
    const currentMeta = meta || {
      title: "Page introuvable | Agriconsulting Maroc",
      description: "Cette page n’est pas disponible sur le site Agriconsulting Maroc.",
      label: "Page introuvable",
    };
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.documentElement.lang = "fr";
    document.title = currentMeta.title;
    ensureCanonical(canonicalUrl);

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: currentMeta.description,
    });
    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: isIndexable
        ? "index, follow, max-image-preview:large"
        : "noindex, follow",
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: currentMeta.title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: currentMeta.description,
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: referenceMeta ? "article" : "website",
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: SOCIAL_IMAGE,
    });
    ensureMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "Agriconsulting Maroc, conseil agricole et développement territorial",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: currentMeta.title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: currentMeta.description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: SOCIAL_IMAGE,
    });

    updateStructuredData({ canonicalUrl, meta: currentMeta, pathname });
  }, [location.pathname]);

  return null;
}

export default Seo;
