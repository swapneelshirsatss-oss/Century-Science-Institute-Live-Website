import Link from "next/link";
import Image from "next/image";
import { courses, programs, contact, gmb } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="x-footer">
      <div className="x-wrap">
        <div className="x-fcols">
          <div className="x-fbrand">
            <Image className="x-flogo" src="/brand/csi-logo.webp" alt="Century Science Institute logo" width={168} height={147} />
            <p>JEE, NEET and MHT-CET coaching with Double Teaching, on Hudkeshwar Road, Nagpur.</p>
          </div>
          <div>
            <h2>Courses</h2>
            <ul>
              {courses.map((c) => <li key={c.href}><Link href={c.href}>{c.name === "11th & 12th" ? "11th & 12th Science" : `${c.name} coaching`}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2>Programs</h2>
            <ul>
              {programs.map((p) => <li key={p.href}><Link href={p.href}>{p.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2>Institute</h2>
            <ul>
              <li><Link href="/toppers-jee-neet-mht-cet/">About us</Link></li>
              <li><Link href="/topper-jee-neet-cet-12th-sci/">Toppers</Link></li>
              <li><Link href="/gallery/">Gallery</Link></li>
              <li><Link href="/blog/">Blog</Link></li>
              <li><Link href="/coaching/">All courses</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`tel:${contact.phonePrimaryRaw}`}>{contact.phonePrimary}</a></li>
              <li><a href={`tel:${contact.phoneSecondaryRaw}`}>{contact.phoneSecondary}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><Link href="/contact/">Directions</Link></li>
              <li><Link href="/admission-form/">Admission form</Link></li>
              <li><a href={gmb.reviewsUrl} target="_blank" rel="noopener noreferrer">{gmb.rating} ★ ({gmb.reviewCount} Google reviews)</a></li>
            </ul>
          </div>
        </div>
        <div className="x-fmap">
          <iframe
            title="Century Science Institute on Google Maps"
            src={gmb.embedUrl}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p className="x-fine">© {new Date().getFullYear()} Century Science Institute, {contact.address}.</p>
      </div>
    </footer>
  );
}
