import Link from "next/link";

const SITE = "https://centuryscienceinstitute.in";

/**
 * Dark title band for inner "landing" pages in the new design.
 * - `crumbs`: trail without Home (visual only), as used on /coaching/.
 * - `breadcrumbs`: a page's original list starting with Home ({ label, href }); renders the trail
 *   AND the same BreadcrumbList JSON-LD the old Breadcrumbs component emitted (SEO unchanged).
 * - `size="md"` for long, keyword-heavy H1s kept from the live site.
 */
export default function PageHero({ eyebrow, title, lead, crumbs = [], breadcrumbs, size, children }) {
  const trail = breadcrumbs ? breadcrumbs.slice(1).map((b, i, arr) => (i === arr.length - 1 ? { label: b.label } : b)) : crumbs;
  const schema = breadcrumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: `${SITE}${item.href}` })),
  };
  const fontSize = size === "md" ? "clamp(40px, 6vw, 80px)" : "clamp(52px, 8vw, 112px)";

  return (
    <section className="x-hero" style={{ paddingBottom: 0 }}>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <div className="x-wrap">
        <div className="x-hero-in" style={{ maxWidth: 900, paddingBlock: "clamp(40px,6vw,80px)" }}>
          {trail.length > 0 && (
            <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: "var(--mist)", marginBottom: 18 }}>
              <Link href="/" style={{ color: "var(--mist)" }}>Home</Link>
              {trail.map((c) => (
                <span key={c.label}> / {c.href ? <Link href={c.href} style={{ color: "var(--mist)" }}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="x-kicker"><i aria-hidden="true" />{eyebrow}</p>}
          <h1 className="x-big" style={{ marginTop: 18, fontSize }}>{title}</h1>
          {lead && <p className="x-lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
