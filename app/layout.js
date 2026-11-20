import localFont from "next/font/local";
import "./globals.css";
import "./site.css";
import ClientLayout from "./ClientLayout";
import { JsonLd, SITE } from "@/lib/schema";

/* Fonts are self-hosted (no runtime call to Google Fonts): faster first paint, no layout shift. */
const display = localFont({
  src: [
    { path: "./fonts/big-shoulders-display-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "./fonts/big-shoulders-display-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Arial",
});

const body = localFont({
  src: [
    { path: "./fonts/hanken-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/hanken-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/hanken-grotesk-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/hanken-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

/*
 * Root metadata.
 * - No title template: every page already carries its full, live-site title
 *   ("Best JEE Coaching in Nagpur – Century Science Institute"), so a template doubled the brand.
 * - No canonical here: a root canonical is inherited by every page that forgets its own,
 *   which pointed /admission-form/ and all 404s at the homepage. Each page sets its own.
 */
export const metadata = {
  metadataBase: new URL(SITE),
  title: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
  description:
    "Top-rated coaching for JEE, NEET & CET in Nagpur. Expert faculty, proven results & personalized learning. Enroll today.",
  applicationName: "Century Science Institute",
  authors: [{ name: "Century Science Institute" }],
  creator: "Century Science Institute",
  publisher: "Century Science Institute",
  openGraph: {
    siteName: "Century Science Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/photos/classroom.jpg",
        width: 1200,
        height: 800,
        alt: "Classroom session at Century Science Institute, Hudkeshwar Road, Nagpur",
      },
      {
        url: "/brand/csi-logo.png",
        width: 499,
        height: 436,
        alt: "Century Science Institute Nagpur logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@institute_csi",
    site: "@institute_csi",
  },
  // NOINDEX=1 on preview/temporary domains keeps them out of search results (see app/robots.js).
  robots:
    process.env.NOINDEX === "1" || process.env.NOINDEX === "true"
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
};

export const viewport = {
  themeColor: "#0E1D27",
};

const rootOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Century Science Institute",
      alternateName: ["CSI Nagpur", "Century Science Institute Nagpur", "CSI Hudkeshwar Road"],
      description: "JEE, NEET, MHT-CET and 11th–12th Science coaching in Nagpur with the Double Teaching Concept.",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#director`,
      name: "Mrs. Meghana Marchatwar",
      jobTitle: "Director & Senior Biology Faculty",
      description: "Director of Century Science Institute, Nagpur (M.Sc. Biology, B.Ed., A.D.I.D., 15+ years teaching experience).",
      image: `${SITE}/photos/director-meghana-marchatwar.jpg`,
      worksFor: { "@id": `${SITE}/#organization` },
      knowsAbout: ["NEET Biology", "NCERT Biology", "MHT-CET PCB", "Class 11 & 12 Biology"],
    },
    {
      "@type": "Place",
      "@id": `${SITE}/#place`,
      name: "Century Science Institute, Hudkeshwar Road, Nagpur",
      geo: { "@type": "GeoCoordinates", latitude: 21.10956917, longitude: 79.11702919 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=21.10956917,79.11702919",
      address: {
        "@type": "PostalAddress",
        streetAddress: "124, Rukhmini Nagar, Ashirwad Nagar Square, Near Hanuman Mandir, Hudkeshwar Road",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "440034",
        addressCountry: "IN",
      },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE}/#organization`,
      name: "Century Science Institute",
      alternateName: ["CSI Nagpur", "Century Science Institute Nagpur"],
      description:
        "JEE, NEET and MHT-CET coaching in Nagpur with Double Teaching: board syllabus and entrance preparation every day.",
      url: `${SITE}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/brand/csi-logo.png`,
        width: 499,
        height: 436,
      },
      image: [
        `${SITE}/photos/classroom.jpg`,
        `${SITE}/photos/building.jpg`,
        `${SITE}/brand/csi-logo.png`,
      ],
      email: "info@centuryscienceinstitute.in",
      telephone: "+91-9422475665",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      founder: { "@id": `${SITE}/#director` },
      hasMap: "https://www.google.com/maps/search/?api=1&query=21.10956917,79.11702919",
      address: {
        "@type": "PostalAddress",
        streetAddress: "124, Rukhmini Nagar, Ashirwad Nagar Square, Near Hanuman Mandir, Hudkeshwar Road",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "440034",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 21.10956917, longitude: 79.11702919 },
      areaServed: [
        { "@type": "City", name: "Nagpur" },
        { "@type": "Place", name: "Hudkeshwar Road, Nagpur" },
        { "@type": "Place", name: "Ashirwad Nagar, Nagpur" },
        { "@type": "Place", name: "Manewada, Nagpur" },
        { "@type": "Place", name: "Besa-Pipla, Nagpur" },
        { "@type": "Place", name: "Nandanvan, Nagpur" },
        { "@type": "Place", name: "Sakkardara, Nagpur" },
        { "@type": "AdministrativeArea", name: "Vidarbha, Maharashtra" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9422475665",
          contactType: "admissions",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9371922368",
          contactType: "admissions",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:30",
        },
      ],
      location: { "@id": `${SITE}/#place` },
      sameAs: [
        "https://www.facebook.com/CenturyScienceinstitutenagpur",
        "https://x.com/institute_csi",
        "https://www.instagram.com/century_science_institute",
        "https://www.youtube.com/@csi_JEE_NEET_classes_nagpur",
        "https://in.pinterest.com/csiinstitute21",
        "https://www.linkedin.com/company/century-science-institute-neet-jee-mht-cet-classes-in-nagpur",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Century Science Institute LLM Knowledge Base" />
        <link rel="llms" href="/llms.txt" />
      </head>
      <body className="site">
        <JsonLd data={rootOrganizationSchema} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
