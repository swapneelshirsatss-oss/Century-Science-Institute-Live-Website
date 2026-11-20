import { photos } from "./photos";
/*
 * Content for the redesigned site.
 * Toppers: ONLY names and results published on the live site (centuryscienceinstitute.in,
 * homepage and /topper-jee-neet-cet-12th-sci/, checked 12 Oct 2026).
 * Photos: matched to names by the captions on the live /topper-jee-neet-cet-12th-sci/ page (Nov 2026).
 * Ruchi Ambatkar: the white-shirt photo (25.png), confirmed by the agency Nov 2026; the live JEE Adv. caption showed a different face.
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
  photo: "/toppers/tejas-dhande.jpg",
};

export const toppers = [
  { name: "Akansh Baisware", result: "95.52%", exam: "MHT-CET", photo: "/toppers/akansh-baisware.jpg" },
  { name: "Krishna Rathod", result: "92.80", exam: "MHT-CET", photo: "/toppers/krishna-rathod.jpg" },
  { name: "Manswi Shende", result: "92.7%", exam: "MHT-CET", photo: "/toppers/manswi-shende.jpg" },
  { name: "Adit Kutemate", result: "92.65", exam: "MHT-CET", photo: "/toppers/adit-kutemate.jpg" },
  { name: "Ruchi Ambatkar", result: "JEE Adv.", exam: "Qualified", photo: "/toppers/ruchi-ambatkar.jpg" },
  { name: "Sanskriti Akulwar", result: "MBBS", exam: "Government Medical College", photo: "/toppers/sanskriti-akulwar.jpg" },
  { name: "Kiran Hedao", result: "MBBS", exam: "Government Medical College", photo: "/toppers/kiran-hedao.jpg" },
  { name: "Swatesh Patil", result: "MS", exam: "Medical PG", photo: "/toppers/swatesh-patil.jpg" },
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
  name: "Mrs. Meghana Marchatwar",
  creds: ["M.Sc. Biology", "B.Ed.", "A.D.I.D.", "15+ years teaching"],
  photo: photos.director,
};

/* Videos embedded on the live homepage (Nov 2026). Titles shortened from the YouTube titles. */
export const videos = [
  { id: "7C22ARTx4gs", title: "MHT-CET coaching at CSI" },
  { id: "AzXi1nH9ss8", title: "IIT-JEE preparation in Nagpur" },
  { id: "BoKg8qGhhQA", title: "JEE and NEET coaching: fees and scholarships" },
  { id: "ZcjP0dq-wcg", title: "JEE and NEET classes: NEET scholarship" },
];
export const youtubeChannel = "https://www.youtube.com/@csi_JEE_NEET_classes_nagpur";

/* Main courses shown on the homepage and /coaching/. All hrefs are existing live URLs. */
export const courses = [
  { name: "JEE", href: "/jee-coaching/", desc: "Main and Advanced. Class 11, Class 12 and repeaters. Topic-wise mocks and past papers." },
  { name: "NEET", href: "/neet-coaching/", desc: "NCERT Biology with the director, plus Physics and Chemistry. Full-length NEET mocks." },
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
