/*
 * Content for the redesigned site.
 * Toppers: ONLY names and results published on the live site (centuryscienceinstitute.in,
 * homepage and /topper-jee-neet-cet-12th-sci/, checked 12 Oct 2026).
 * `photo` stays null until the institute confirms which photo belongs to which student.
 * To add a photo: put the file in /public/toppers/ and set photo: "/toppers/tejas-dhande.webp".
 */

export const contact = {
  phonePrimary: "+91 94224 75665",
  phonePrimaryRaw: "9422475665",
  phoneSecondary: "+91 93719 22368",
  phoneSecondaryRaw: "9371922368",
  whatsapp: "919422475665",
  email: "info@centuryscienceinstitute.in",
  address: "124, Rukhmini Nagar, Ashirwad Nagar Square, near Hanuman Mandir, Hudkeshwar Road, Nagpur 440034",
  hours: "Monday to Sunday, 8:00 am to 8:30 pm",
  maps: "https://www.google.com/maps/search/?api=1&query=21.10956917,79.11702919",
};

export const featuredTopper = {
  name: "Tejas Dhande",
  score: "99.23",
  label: "percentile in MHT-CET",
  photo: null,
};

export const toppers = [
  { name: "Akansh Baisware", result: "95.52%", exam: "MHT-CET", photo: null },
  { name: "Krishna Rathod", result: "92.80", exam: "MHT-CET", photo: null },
  { name: "Manswi Shende", result: "92.7%", exam: "MHT-CET", photo: null },
  { name: "Adit Kutemate", result: "92.65", exam: "MHT-CET", photo: null },
  { name: "Ruchi Ambatkar", result: "JEE Adv.", exam: "Qualified", photo: null },
  { name: "Sanskriti Akulwar", result: "MBBS", exam: "Government Medical College", photo: null },
  { name: "Kiran Hedao", result: "MBBS", exam: "Government Medical College", photo: null },
  { name: "Swatesh Patil", result: "MS", exam: "Medical PG", photo: null },
];

export const tickerItems = [
  { score: "99.23", text: "Tejas Dhande, MHT-CET" },
  { score: "95.52%", text: "Akansh Baisware, MHT-CET" },
  { score: "92.80", text: "Krishna Rathod, MHT-CET" },
  { score: "92.7%", text: "Manswi Shende, MHT-CET" },
  { score: "92.65", text: "Adit Kutemate, MHT-CET" },
  { score: "JEE Adv.", text: "Ruchi Ambatkar, qualified" },
  { score: "MBBS", text: "Sanskriti Akulwar, GMC" },
  { score: "MBBS", text: "Kiran Hedao, GMC" },
];

export const director = {
  name: "Mrs. Meghna Marchatwar",
  creds: ["M.Sc. Biology", "B.Ed.", "A.D.I.D.", "15+ years teaching"],
  photo: null,
};

/* Main courses shown on the homepage and /coaching/. All hrefs are existing live URLs. */
export const courses = [
  { name: "JEE", href: "/jee-coaching/", desc: "Main and Advanced. Class 11, Class 12 and droppers. Weekly computer-based mocks." },
  { name: "NEET", href: "/neet-coaching/", desc: "NCERT Biology with the director, Physics and Chemistry clinics, 720-mark OMR tests." },
  { name: "MHT-CET", href: "/mht-cet-coaching/", desc: "PCM and PCB, State Board aligned. Crash course and test series available." },
  { name: "11th & 12th", href: "/11-12-th-science-coaching/", desc: "Board Science coaching for State Board and CBSE students." },
  { name: "Residential", href: "/jee-neet-cet-residential-course/", desc: "Two-year course with supervised hostel for students from outside Nagpur." },
];

export const programs = [
  { name: "MHT-CET crash course", href: "/mht-cet-crash-course/" },
  { name: "MHT-CET test series", href: "/mht-cet-test-series/" },
  { name: "10th Std test series", href: "/10th-std-test-series/" },
  { name: "NDA 2-year residential", href: "/national-defence-academy-exam-preparation-2-years-residential-course/" },
  { name: "Naval Academy preparation", href: "/naval-academy-exam-preparation/" },
];

export const nav = [
  { label: "Results", href: "/topper-jee-neet-cet-12th-sci/" },
  { label: "About", href: "/toppers-jee-neet-mht-cet/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
