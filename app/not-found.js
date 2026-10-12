import Link from "next/link";

export const metadata = { title: "Page not found – Century Science Institute", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="x-hero">
      <div className="x-wrap">
        <div className="x-hero-in">
          <p className="x-kicker"><i aria-hidden="true" />404</p>
          <h1 className="x-big" style={{ marginTop: 18, fontSize: "clamp(56px, 9vw, 120px)" }}>This page moved.</h1>
          <p className="x-lead">The page you opened isn&apos;t here any more. Our courses, results and contact details are one click away.</p>
          <div className="x-ctas">
            <Link className="x-btn x-btn-gold" href="/coaching/">See all courses</Link>
            <Link className="x-btn x-btn-line" href="/">Go to the homepage</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
