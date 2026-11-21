import Link from "next/link";
import DocPage from "@/components/site/DocPage";
import { instituteInfo } from "@/data/instituteData";
import { gmb } from "@/data/site";
import { DEFAULT_OG_IMAGE, SITE } from "@/lib/schema";

export const metadata = {
  title: "Contact Century Science Institute – Hudkeshwar Road Nagpur",
  description: "Contact Century Science Institute Nagpur. Address: 124, Hudkeshwar Rd, near Hanuman Mandir, Rukmini Nagar, New Subhedar Layout, Ashirwad Nagar, Nagpur 440024. Phone: +91 9422475665.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/contact/"
  },
  openGraph: {
    title: "Contact Century Science Institute – Hudkeshwar Road Nagpur",
    description: "Visit Century Science Institute at 124, Hudkeshwar Rd, near Hanuman Mandir, Rukmini Nagar, New Subhedar Layout, Ashirwad Nagar, Nagpur 440024. Call +91 94224 75665.",
    url: "https://centuryscienceinstitute.in/contact/",
    images: [DEFAULT_OG_IMAGE],
  }
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE}/contact/#contactpage`,
  url: `${SITE}/contact/`,
  name: "Contact Century Science Institute, Nagpur",
  isPartOf: { "@id": `${SITE}/#website` },
  mainEntity: { "@id": `${SITE}/#organization` },
};

const a = instituteInfo.address;
const c = instituteInfo.contact;
const wa = `https://wa.me/${c.whatsappNumber}?text=Hello%20Century%20Science%20Institute,%20I%20would%20like%20to%20visit%20the%20center`;

export default function ContactPage() {
  return (
    <DocPage
      schema={contactPageSchema}
      crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact/" }]}
      pill="Nagpur Academic Center"
      title="Contact Century Science Institute"
      lead="We invite parents and students to visit our campus building on Hudkeshwar Road for personal counselling with Director Mrs. Meghana Marchatwar."
      tabs={false}
      headExtra={
        <div className="x-ctas" style={{ marginTop: 18 }}>
          <a className="x-btn x-btn-ink x-btn-sm" href={`tel:${c.phoneRaw}`}>Call {c.phonePrimary}</a>
          <a className="x-btn x-btn-line-ink x-btn-sm" href={wa} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      }
      sections={[
        {
          id: "centre",
          label: "Direct Contact Information",
          body: (
            <>
              <h3>Century Science Institute Center</h3>
              <p>Located right near Ashirwad Nagar Square on Hudkeshwar Road, easily accessible from all parts of South and Central Nagpur.</p>
              <ul className="gh-list" style={{ marginTop: 16 }}>
                <li>
                  <strong>Campus Address</strong>
                  <span>
                    {a.street}, {a.city}, {a.state} - {a.postalCode}
                    <br />
                    <a className="gh-inline" href={a.googleMapsUrl} target="_blank" rel="noopener noreferrer">Open Location on Google Maps</a>
                  </span>
                </li>
                <li>
                  <strong>Admission Office Lines</strong>
                  <span>
                    Primary: <a className="gh-inline" href={`tel:${c.phoneRaw}`}>{c.phonePrimary}</a>
                    <br />
                    Secondary: <a className="gh-inline" href="tel:9371922368">{c.phoneSecondary}</a>
                  </span>
                </li>
                <li>
                  <strong>Google Business Profile &amp; Reviews</strong>
                  <span>
                    {gmb.rating} ★ ({gmb.reviewCount} verified Google reviews) · Women-owned coaching center
                    <br />
                    <a className="gh-inline" href={gmb.reviewsUrl} target="_blank" rel="noopener noreferrer">Read Google Reviews</a>
                    {" · "}
                    <a className="gh-inline" href={gmb.writeReviewUrl} target="_blank" rel="noopener noreferrer">Write a Review</a>
                  </span>
                </li>
                <li>
                  <strong>Working Hours</strong>
                  <span>
                    {c.workingHours}
                    <br />
                    Open 7 days a week for parent visits and student counselling
                  </span>
                </li>
              </ul>
            </>
          ),
          foot: <Link href="/admission-form/">Online Admission Form</Link>,
        },
        {
          id: "map",
          label: "Map",
          raw: true,
          body: (
            <>
              <div className="gh-map">
                <iframe
                  title="Century Science Institute Location Map Nagpur"
                  src="https://maps.google.com/maps?q=21.109374,79.1164391&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="gh-box-foot" style={{ color: "var(--ink-2)" }}>
                Landmark: Near Hanuman Mandir, Rukmini Nagar, New Subhedar Layout, Ashirwad Nagar, Hudkeshwar Rd, Nagpur - 440024.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
