import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  metadataBase: new URL("https://centuryscienceinstitute.in"),
  title: {
    default: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
    template: "%s – Century Science Institute"
  },
  description: "Century Science Institute offers expert NEET, JEE, and MHT-CET coaching in Nagpur. Experienced faculty, test series & personalized guidance.",
  authors: [{ name: "Century Science Institute" }],
  creator: "Century Science Institute",
  publisher: "Century Science Institute",
  keywords: [
    "NEET Coaching in Nagpur",
    "JEE Coaching in Nagpur",
    "MHT-CET Coaching in Nagpur",
    "11th 12th Science Classes Nagpur",
    "Best Coaching Classes Hudkeshwar Road Nagpur",
    "Century Science Institute"
  ],
  alternates: {
    canonical: "https://centuryscienceinstitute.in/"
  },
  openGraph: {
    title: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
    description: "Century Science Institute offers expert NEET, JEE, and MHT-CET coaching in Nagpur. Experienced faculty, test series & personalized guidance.",
    url: "https://centuryscienceinstitute.in/",
    siteName: "Century Science Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/cropped-Century-LOGO-NO-BG-WEB.webp",
        width: 1078,
        height: 975,
        alt: "Century Science Institute Nagpur Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
    description: "Century Science Institute offers expert NEET, JEE, and MHT-CET coaching in Nagpur.",
    creator: "@institute_csi"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const rootOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://centuryscienceinstitute.in/#place",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.10956917",
        "longitude": "79.11702919"
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=21.10956917,79.11702919",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "124, Rukhmini Nagar, Ashirwad Nagar Square,",
        "addressLocality": "Near Hanuman Mandir, Hudkeshwar Road, Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440034",
        "addressCountry": "+91"
      }
    },
    {
      "@type": ["EducationalOrganization", "Organization"],
      "@id": "https://centuryscienceinstitute.in/#organization",
      "name": "Century Science Institute - Best NEET JEE Mht-cet Coaching Classes in Nagpur",
      "url": "https://centuryscienceinstitute.in",
      "sameAs": [
        "https://www.facebook.com/CenturyScienceinstitutenagpur",
        "https://twitter.com/https://x.com/institute_csi",
        "https://www.instagram.com/century_science_institute",
        "https://www.youtube.com/@csi_JEE_NEET_classes_nagpur",
        "https://in.pinterest.com/csiinstitute21",
        "https://www.linkedin.com/company/century-science-institute-neet-jee-mht-cet-classes-in-nagpur"
      ],
      "email": "info@centuryscienceinstitute.in",
      "telephone": "+91 9422475665",
      "priceRange": "₹₹",
      "location": {
        "@id": "https://centuryscienceinstitute.in/#place"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootOrganizationSchema) }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
