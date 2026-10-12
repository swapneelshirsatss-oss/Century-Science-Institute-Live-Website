import Link from "next/link";

/** Dark title band for inner pages built in the new design. */
export default function PageHero({ eyebrow, title, lead, crumbs = [], children }) {
  return (
    <section className="x-hero" style={{ paddingBottom: 0 }}>
      <div className="x-wrap">
        <div className="x-hero-in" style={{ maxWidth: 900, paddingBlock: "clamp(40px,6vw,80px)" }}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: "var(--mist)", marginBottom: 18 }}>
              <Link href="/" style={{ color: "var(--mist)" }}>Home</Link>
              {crumbs.map((c) => (
                <span key={c.label}> / {c.href ? <Link href={c.href} style={{ color: "var(--mist)" }}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="x-kicker"><i aria-hidden="true" />{eyebrow}</p>}
          <h1 className="x-big" style={{ marginTop: 18, fontSize: "clamp(52px, 8vw, 112px)" }}>{title}</h1>
          {lead && <p className="x-lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
