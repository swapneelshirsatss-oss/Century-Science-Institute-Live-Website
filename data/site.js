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
  address: "124, Hudkeshwar Rd, near Hanuman Mandir, Rukmini Nagar, New Subhedar Layout, Ashirwad Nagar, Nagpur, Maharashtra 440024",
  hours: "Mon–Fri: 6:15 am–9:00 pm · Sat: 7:15 am–9:00 pm · Sun: 8:00 am–8:00 pm",
  maps: "https://www.google.com/maps/place/?cid=12519902723949876203",
};

export const gmb = {
  cid: "12519902723949876203",
  placeId: "ChIJQc2MlAy51DsR61N6szGhv60",
  kgId: "/g/11j4fl243d",
  cidUrl: "https://www.google.com/maps/place/?cid=12519902723949876203",
  placeIdUrl: "https://www.google.com/maps/place/?q=place_id:ChIJQc2MlAy51DsR61N6szGhv60",
  kgUrl: "https://www.google.com/search?kgmid=/g/11j4fl243d",
  reviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJQc2MlAy51DsR61N6szGhv60",
  writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJQc2MlAy51DsR61N6szGhv60",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4419.970074708287!2d79.1164391!3d21.109373999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b90c948ccd41%3A0xadbfa131b37a53eb!2sCentury%20Science%20Institute!5e1!3m2!1sen!2sin!4v1795236609253!5m2!1sen!2sin",
  rating: "4.6",
  reviewCount: 192,
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
