export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },
    sitemap: "https://centuryscienceinstitute.in/sitemap.xml",
  };
}
