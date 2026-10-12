/*
 * Set NOINDEX=1 in the hosting environment for any preview or temporary domain
 * (e.g. a Hostinger temporary URL). That blocks crawling and adds noindex, so the
 * staging copy never competes with centuryscienceinstitute.in in Google.
 * Leave NOINDEX unset on the real domain.
 */
const NOINDEX = process.env.NOINDEX === "1" || process.env.NOINDEX === "true";

export default function robots() {
  if (NOINDEX) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://centuryscienceinstitute.in/sitemap.xml",
    host: "https://centuryscienceinstitute.in",
  };
}
