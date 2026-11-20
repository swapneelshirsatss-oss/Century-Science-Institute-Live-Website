/*
 * Every indexable URL, matching the live site's paths exactly (trailing slash included).
 * lastModified is a fixed date per page, so search engines are not told every page
 * changed on every deploy. Update the date when a page's content actually changes.
 */
const BASE = "https://centuryscienceinstitute.in";
const LAUNCH = "2026-10-12";

const pages = [
  ["/", 1.0, "weekly"],
  ["/jee-coaching/", 0.9, "monthly"],
  ["/neet-coaching/", 0.9, "monthly"],
  ["/mht-cet-coaching/", 0.9, "monthly"],
  ["/11-12-th-science-coaching/", 0.9, "monthly"],
  ["/coaching/", 0.8, "monthly"],
  ["/mht-cet-crash-course/", 0.8, "monthly"],
  ["/mht-cet-test-series/", 0.8, "monthly"],
  ["/10th-std-test-series/", 0.7, "monthly"],
  ["/jee-neet-cet-residential-course/", 0.8, "monthly"],
  ["/national-defence-academy-exam-preparation-2-years-residential-course/", 0.7, "monthly"],
  ["/naval-academy-exam-preparation/", 0.7, "monthly"],
  ["/topper-jee-neet-cet-12th-sci/", 0.8, "monthly"],
  ["/toppers-jee-neet-mht-cet/", 0.7, "monthly"],
  ["/admission-form/", 0.7, "monthly"],
  ["/contact/", 0.7, "monthly"],
  ["/gallery/", 0.5, "monthly"],
  ["/blog/", 0.6, "weekly"],
  ["/jee-main-2026-registration-updates/", 0.6, "monthly"],
  ["/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/", 0.6, "monthly"],
];

export default function sitemap() {
  return pages.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(LAUNCH),
    changeFrequency,
    priority,
  }));
}
