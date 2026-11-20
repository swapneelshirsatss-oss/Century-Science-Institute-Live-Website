export const SITE = "https://centuryscienceinstitute.in";

export const DEFAULT_OG_IMAGE = {
  url: "/photos/classroom.jpg",
  width: 1200,
  height: 800,
  alt: "Classroom session at Century Science Institute, Hudkeshwar Road, Nagpur",
};

/**
 * XSS-safe JSON-LD serializer (escapes `<` so script tags cannot break out).
 */
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

/**
 * Course JSON-LD linked to the root #organization and #place entities.
 */
export function buildCourseSchema({ name, description, path, courseMode = "onsite" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE}${path}#course`,
    name,
    description,
    url: `${SITE}${path}`,
    provider: { "@id": `${SITE}/#organization` },
    offers: {
      "@type": "Offer",
      category: "Classroom coaching",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode,
      location: { "@id": `${SITE}/#place` },
    },
  };
}

/**
 * BlogPosting JSON-LD linked to the root #organization publisher.
 */
export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  authorName,
  image,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE}${path}#article`,
    headline,
    description,
    url: `${SITE}${path}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${path}` },
    image: image.startsWith("http") ? image : `${SITE}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE,
    },
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en-IN",
  };
}
