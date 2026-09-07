const API_BASE_URL = (
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://api.agriconsulting-maroc.ma")
).replace(/\/$/, "");

function unwrapList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

function resolveMediaUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

async function fetchJson(path) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

export function normalizeReference(item) {
  return {
    id: item.id,
    sector: item.sector?.title || item.sector || "",
    sectorSlug: item.sector?.slug || "",
    title: item.title || "",
    client: item.client || "",
    funding: item.funding || "",
    duration: item.duration || "",
    year: item.year || "",
    country: item.country || "",
    partners: item.partners || "",
    budget: item.budget || "",
  };
}

export function normalizeTeamMember(item) {
  return {
    id: item.id,
    name: item.name || "",
    role: item.role || "",
    image: resolveMediaUrl(item.image),
    quote: item.description || "",
  };
}

export function normalizeClientLogo(item) {
  return {
    id: item.id,
    name: item.name || "Client Agriconsulting Maroc",
    image: resolveMediaUrl(item.logo || item.image),
    order: item.order || 0,
  };
}

export function normalizeContact(item) {
  return {
    companyName: item.company_name || "Agriconsulting Maroc SA",
    addressLine1: item.address_line_1 || "24, Avenue de France",
    addressLine2:
      item.address_line_2 || "App 10 (3ème étage), Agdal - Rabat, Maroc",
    phone: item.phone || "+212 5 376 52 32",
    fax: item.fax || "+212 5 376 52 33",
    email: item.email || "info@agriconsulting-ma.com",
    latitude: item.map_latitude,
    longitude: item.map_longitude,
  };
}

export async function getReferences() {
  const payload = await fetchJson("/api/references/");
  return unwrapList(payload).map(normalizeReference);
}

export async function getReference(id) {
  const payload = await fetchJson(`/api/references/${encodeURIComponent(id)}/`);
  return normalizeReference(payload);
}

export async function getTeamMembers() {
  const payload = await fetchJson("/api/team/");
  return unwrapList(payload).map(normalizeTeamMember);
}

export async function getClientLogos() {
  const payload = await fetchJson("/api/clients/");
  return unwrapList(payload).map(normalizeClientLogo);
}

export async function getContactInfo() {
  const payload = await fetchJson("/api/contact/");
  const contact = unwrapList(payload)[0] || payload;
  return normalizeContact(contact || {});
}
