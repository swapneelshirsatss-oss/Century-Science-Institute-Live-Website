/*
 * Every real photo the site uses, in one place.
 * They are still served from the old WordPress uploads folder. After running
 * scripts/fetch-wp-images.ps1, switch BASE to "local" and they load from public/photos instead
 * (required before WordPress is switched off).
 */
const BASE = "wordpress"; // "wordpress" | "local"

const wp = "https://centuryscienceinstitute.in/wp-content/uploads";
const files = {
  director: ["2025/07/Meghna-Maam-768x1076.jpeg", "director-meghna-marchatwar.jpeg"],
  building: ["2025/07/Exterior-Building.jpg", "gallery-exterior-building.jpg"],
  felicitation: ["2025/08/Felicitation-300x200.webp", "gallery-felicitation.webp"],
  parentsMeeting: ["2025/08/Parents-Meeting-300x135.webp", "gallery-parents-meeting.webp"],
  annualEvent: ["2025/08/Annula-Event-300x200.webp", "gallery-annual-event.webp"],
  csiJee: ["2025/08/CSI-JEE-300x200.webp", "gallery-csi-jee.webp"],
  freshers: ["2025/08/Freshers-Party-300x135.webp", "gallery-freshers-party.webp"],
  blogCet: ["2025/09/2f496abb-550e-4955-a5ae-ceae5b14abf8.png", "blog-mht-cet-2025.png"],
  blogJee: ["2025/11/Get-More-Information-about-IIT-JEE-Strategy-Guide-1024x536.png", "blog-jee-strategy-guide.png"],
};

export const photos = Object.fromEntries(
  Object.entries(files).map(([k, [remote, local]]) => [k, BASE === "local" ? `/photos/${local}` : `${wp}/${remote}`]),
);
