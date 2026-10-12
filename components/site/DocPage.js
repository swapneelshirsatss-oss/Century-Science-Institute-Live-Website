import Link from "next/link";
import CourseTabs from "@/components/site/CourseTabs";
import DemoButton from "@/components/site/DemoButton";
import { contact, courses } from "@/data/site";

const SITE = "https://centuryscienceinstitute.in";

/**
 * "Document" page in the same calm, GitHub-like structure as the course pages:
 * path line + title, optional sticky tabs, a column of bordered sections, and a sidebar.
 *
 * SEO: `crumbs` is the page's original breadcrumb list ({ label, href }, starting with Home).
 * It renders the same BreadcrumbList JSON-LD the old Breadcrumbs component emitted, so the
 * structured data is unchanged. The page's own metadata and other JSON-LD stay in the page file.
 */
export default function DocPage({ crumbs, title, lead, pill = "Admissions open 2027–28", sections = [], tabs = true, about, aboutTitle = "About", cta = true, side, children, headExtra }) {
  const crumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE}${item.href}`,
    })),
  };
  const showTabs = tabs && sections.length >= 3;

  return (
    <div className="gh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

      <header className="gh-head">
        <div className="x-wrap">
          <nav className="gh-path" aria-label="Breadcrumb">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <span key={c.href} style={{ display: "contents" }}>
                  {last ? <strong aria-current="page">{c.label}</strong> : <Link href={c.href}>{i === 0 ? "CSI" : c.label}</Link>}
                  {!last && <span aria-hidden="true">/</span>}
                </span>
              );
            })}
            {pill && <span className="gh-pill">{pill}</span>}
          </nav>
          <h1 className="gh-title">{title}</h1>
          {lead && <p className="gh-lead">{lead}</p>}
          {headExtra}
        </div>
      </header>

      {showTabs && <CourseTabs tabs={sections.map((s) => ({ id: s.id, label: s.label, count: s.count }))} />}

      <div className="x-wrap gh-layout">
        <div className="gh-main">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="gh-box">
              <h2 className="gh-box-h">{s.heading || s.label}{s.count != null && <span className="gh-count">{s.count}</span>}</h2>
              {s.raw ? s.body : <div className="gh-box-b">{s.body}</div>}
              {s.foot && <p className="gh-box-foot">{s.foot}</p>}
            </section>
          ))}
          {children}
        </div>

        <aside className="gh-side" aria-label="Key facts">
          <div className="gh-side-in">
            {about && (
              <>
                <h2>{aboutTitle}</h2>
                <dl className="gh-facts">
                  {about.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
              </>
            )}
            {side}
            {cta && <DemoButton className="x-btn x-btn-gold gh-cta">Book a free demo class</DemoButton>}
            <a className="gh-side-link" href={`tel:${contact.phonePrimaryRaw}`}>Call {contact.phonePrimary}</a>
            <hr />
            <h2>Centre</h2>
            <p className="gh-side-p">{contact.address}</p>
            <a className="gh-side-link" href={contact.maps} target="_blank" rel="noopener">Get directions</a>
            <hr />
            <h2>Courses</h2>
            <ul className="gh-side-list">
              {courses.map((x) => (
                <li key={x.href}><Link href={x.href}>{x.name === "11th & 12th" ? "11th & 12th Science" : `${x.name} coaching`}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

/** Small helpers for section bodies */
export function Facts({ items }) {
  return (
    <ul className="gh-list">
      {items.map(([h, d]) => <li key={h}><strong>{h}</strong><span>{d}</span></li>)}
    </ul>
  );
}

export function Faq({ items }) {
  return (
    <div className="gh-faq">
      {items.map(([q, a], i) => (
        <details key={q} open={i === 0}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function Table({ head, rows, label }) {
  return (
    <div className="gh-table-wrap" tabIndex={0} role="region" aria-label={label}>
      <table className="gh-table">
        <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]}><th scope="row">{r[0]}</th>{r.slice(1).map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/**
 * FAQ list + the same FAQPage JSON-LD the old FAQSection emitted (faqs: [{ q, a }]).
 * Use as a section body with `raw: true`.
 */
export function FaqBlock({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Faq items={faqs.map((f) => [f.q, f.a])} />
    </>
  );
}

/** The Double Teaching copy (from the old DoubleTeachingSection), in document style. */
export function DoubleTeachingDoc() {
  return (
    <>
      <h3>The Unique Double Teaching Concept & Director Mentorship</h3>
      <p>Unlike commercial coaching factories where junior tutors rotate and board preparation is neglected, Century Science Institute operates on a proven dual-focus formula led by seasoned director-educators.</p>
      <div className="gh-split" aria-label="Double Teaching">
        <div><b>Hour 1: Board & CBSE Descriptive Theory</b>Strict adherence to State Board & CBSE textbooks, derivation writing, definitions, and board exam scoring techniques.</div>
        <div className="g"><b>Hour 2: Competitive Entrance Application</b>Immediate high-level numerical drills, MCQs, shortcut methods, and speed application for NEET, JEE & MHT-CET.</div>
      </div>
      <p><strong>Daily Doubt Clearing & Micro Testing.</strong> Same-day doubt redressal so backlogs never build up before weekend mock examinations.</p>
      <h4>Directors are Tutors: Led by Mrs. Meghna Marchatwar</h4>
      <p>&ldquo;We believe students thrive when the leadership is directly engaged in the classroom. At CSI, we know every student by name, track their weekly progress, and mentor them like family.&rdquo;</p>
      <ul className="gh-bullets">
        <li>Personal mentoring with small batch sizes (30–40 students max)</li>
        <li>Zero faculty turnover during the academic year</li>
        <li>Transparent parent-teacher interactive performance sessions</li>
        <li>Self-owned private campus on Hudkeshwar Road with library & labs</li>
      </ul>
    </>
  );
}
