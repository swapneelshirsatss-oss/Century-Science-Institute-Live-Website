/** @type {import('next').NextConfig} */

/*
 * Permanent redirects (308, treated like 301 by Google) for every live WordPress URL
 * that does not exist as a page on the new site. Source: live sitemap_index.xml, 12 Oct 2026.
 * Page URLs that DO exist on the new site are served at the identical path and are not listed here.
 *
 * WooCommerce course products: they duplicate the course pages (e.g. /neet-coaching-nagpur/ vs
 * /neet-coaching/) and compete with them in search. They are consolidated into the matching page.
 * CONFIRM with the institute that no fees are paid online through these product pages before launch.
 */
const productRedirects = [
  ["/neet-coaching-nagpur/", "/neet-coaching/"],
  ["/jee-classes-in-nagpur/", "/jee-coaching/"],
  ["/mht-cet-coaching-classes-nagpur/", "/mht-cet-coaching/"],
  ["/11th-12th-science-coaching-nagpur/", "/11-12-th-science-coaching/"],
  ["/mht-cet-test-series-nagpur/", "/mht-cet-test-series/"],
  ["/mht-cet-crash-course-nagpur/", "/mht-cet-crash-course/"],
  ["/residential-coaching-program-nagpur/", "/jee-neet-cet-residential-course/"],
  ["/nda-na-coaching-classes-nagpur/", "/national-defence-academy-exam-preparation-2-years-residential-course/"],
  ["/naval-coaching-classes-nagpur/", "/naval-academy-exam-preparation/"],
  // Shop archive "Courses" → the courses hub
  ["/course/", "/coaching/"],
  ["/shop/", "/coaching/"],
  ["/cart/", "/coaching/"],
  ["/checkout/", "/admission-form/"],
  // Blog taxonomy and the default WordPress post
  ["/category/jee-preparation-guide/", "/blog/"],
  ["/category/uncategorized/", "/blog/"],
  ["/hello-world/", "/blog/"],
  // Live-site broken internal link (path doubled)
  ["/jee-neet-cet-residential-course/jee-neet-cet-residential-course/", "/jee-neet-cet-residential-course/"],
];

const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "centuryscienceinstitute.in" }],
  },
  async redirects() {
    return [
      // Each product/page path, with and without the trailing slash
      ...productRedirects.flatMap(([from, to]) => [
        { source: from.replace(/\/$/, ""), destination: to, permanent: true },
      ]),
      // WordPress sitemaps → the new single sitemap
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:name(post|page|product|category|local)-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/locations.kml", destination: "/contact/", permanent: true },
      // Feeds and old category/tag/product archives
      { source: "/feed", destination: "/blog/", permanent: true },
      { source: "/:path*/feed", destination: "/:path*/", permanent: true },
      { source: "/category/:slug*", destination: "/blog/", permanent: true },
      { source: "/tag/:slug*", destination: "/blog/", permanent: true },
      { source: "/product/:slug*", destination: "/coaching/", permanent: true },
      { source: "/product-category/:slug*", destination: "/coaching/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
