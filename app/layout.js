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
      geo: { "@type": "GeoCoordinates", latitude: 21.109374, longitude: 79.1164391 },
      hasMap: "https://www.google.com/maps/place/?cid=12519902723949876203",
      address: {
        "@type": "PostalAddress",
        streetAddress: "124, Hudkeshwar Rd, near Hanuman Mandir, Rukmini Nagar, New Subhedar Layout, Ashirwad Nagar",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "440024",
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
      hasMap: "https://www.google.com/maps/place/?cid=12519902723949876203",
      address: {
        "@type": "PostalAddress",
        streetAddress: "124, Hudkeshwar Rd, near Hanuman Mandir, Rukmini Nagar, New Subhedar Layout, Ashirwad Nagar",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "440024",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 21.109374, longitude: 79.1164391 },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        bestRating: "5",
        worstRating: "1",
        reviewCount: 192,
      },
      areaServed: [
        { "@type": "City", name: "Nagpur" },
        { "@type": "Place", name: "Hudkeshwar Road, Nagpur" },
        { "@type": "Place", name: "Ashirwad Nagar, Nagpur" },
        { "@type": "Place", name: "New Subhedar Layout, Nagpur" },
        { "@type": "Place", name: "Rukmini Nagar, Nagpur" },
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
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "06:15",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "07:15",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Coaching & Test Preparation Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Educational Consulting for IIT JEE Classes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Educational Consulting for NEET" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IIT JEE Advanced Course" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IIT JEE Coaching Classes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IIT JEE Entrance Exam Preparations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IIT JEE Foundation Course" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "NEET Entrance Exam Prep" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "NEET Foundation Course" } },
        ],
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "On-site services", value: true },
        { "@type": "LocationFeatureSpecification", name: "Online classes", value: true },
        { "@type": "LocationFeatureSpecification", name: "Assistive hearing loop", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wheelchair-accessible car park", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wheelchair-accessible entrance", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wheelchair-accessible seating", value: true },
      ],
      location: { "@id": `${SITE}/#place` },
      sameAs: [
        "https://www.google.com/maps/place/?cid=12519902723949876203",
        "https://www.google.com/search?kgmid=/g/11j4fl243d",
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
