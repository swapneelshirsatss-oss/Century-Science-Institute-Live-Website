import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import PhotoSlot from "@/components/site/PhotoSlot";
import DemoButton from "@/components/site/DemoButton";
import { director } from "@/data/site";

export const metadata = {
  /* Title and description restored to the live page's wording (SEO continuity). */
  title: "About Century Science Institute – Nagpur's Trusted Coaching",
  description: "Discover why CSI is Nagpur's most trusted institute for JEE, NEET & CET. Proven results & experienced faculty.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/toppers-jee-neet-mht-cet/"
  }
};

const hours = [
  ["Hour 1: Board & CBSE Descriptive Theory", "Strict adherence to State Board & CBSE textbooks, derivation writing, definitions, and board exam scoring techniques."],
  ["Hour 2: Competitive Entrance Application", "Immediate high-level numerical drills, MCQs, shortcut methods, and speed application for NEET, JEE & MHT-CET."],
  ["Daily Doubt Clearing & Micro Testing", "Same-day doubt redressal so backlogs never build up before weekend mock examinations."],
];

const accountability = [
  "Personal mentoring with small batch sizes (30–40 students max)",
  "Zero faculty turnover during the academic year",
  "Transparent parent-teacher interactive performance sessions",
  "Self-owned private campus on Hudkeshwar Road with library & labs",
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/toppers-jee-neet-mht-cet/" }]}
        eyebrow="15+ Years of Academic Excellence"
        size="md"
        title="About Century Science Institute, Nagpur"
        lead="Founded with a steadfast mission to provide personalized, high-yield coaching for NEET, IIT-JEE, and MHT-CET without commercial crowding or junior tutor outsourcing."
      />

      {/* Leadership */}
      <section className="x-sec" aria-labelledby="phil-title">
        <div className="x-wrap x-dir">
          <div>
            <PhotoSlot src={director.photo} alt="Director Mrs Meghna Marchatwar Century Science Institute" label="Director portrait, 4:5" note={director.name} />
            <p style={{ margin: "14px 0 0", fontWeight: 700, fontSize: 20 }}>Mrs. Meghna Marchatwar</p>
            <p style={{ margin: "2px 0 0", color: "var(--ink-2)" }}>M.Sc. in Biology, B.Ed., A.D.I.D. (15+ Years Experience)</p>
            <p style={{ margin: "2px 0 0", color: "var(--ink-2)" }}>Director & Senior Academic Head, Century Science Institute</p>
          </div>
          <div>
            <p className="x-eyebrow">Our Educational Philosophy</p>
            <h2 id="phil-title" className="x-big" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginTop: 10 }}>Directors are Tutors: True Mentorship Over Commercial Scale</h2>
            <div className="x-prose" style={{ marginTop: 20 }}>
              <p>Century Science Institute was established to counter the biggest problem in contemporary entrance coaching: mass-market factory batches where students are reduced to roll numbers and foundational board preparation is completely neglected.</p>
              <p>At CSI, the leadership directly teaches in the classrooms. With a strict limit of 30–40 students per batch, Mrs. Meghna Marchatwar and our senior IIT/NIT faculties personally monitor each student’s weekly attendance, test scores, homework completion, and psychological readiness.</p>
            </div>
            <div className="x-cols" style={{ marginTop: 24 }}>
              <div className="x-pt"><h3>Self-Owned Campus</h3><p>Dedicated institutional building on Hudkeshwar Road with zero commercial distractions.</p></div>
              <div className="x-pt"><h3>Residential Facility</h3><p>Safe and supervised on-campus hostel and dining for outstation students.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Double Teaching */}
      <section className="x-sec x-dt" aria-labelledby="dt-title">
        <div className="x-wrap">
          <p className="x-eyebrow">Proprietary CSI Academic Methodology</p>
          <h2 id="dt-title" className="x-big x-h2" style={{ fontSize: "clamp(38px, 5.5vw, 76px)" }}>The Unique Double Teaching Concept & Director Mentorship</h2>
          <p className="x-sub">Unlike commercial coaching factories where junior tutors rotate and board preparation is neglected, Century Science Institute operates on a proven dual-focus formula led by seasoned director-educators.</p>

          <div className="x-about-grid">
            <div>
              <p className="x-eyebrow">Daily Structured Formula</p>
              <h3 className="x-about-h3">Double Teaching Concept (1 Hr + 1 Hr)</h3>
              <p className="x-about-p">Most students struggle when competitive entrance prep ignores board descriptive writing, or board coaching fails to build entrance aptitude. CSI solves this permanently:</p>
              <ol className="x-steps">
                {hours.map(([h, p]) => <li key={h}><h4>{h}</h4><p>{p}</p></li>)}
              </ol>
              <p style={{ marginTop: 18 }}><Link className="x-link-light" href="/11-12-th-science-coaching/">Read more about Board + Entrance integration</Link></p>
            </div>
            <div>
              <p className="x-eyebrow">Direct Subject Accountability</p>
              <h3 className="x-about-h3">Directors are Tutors: Led by Mrs. Meghna Marchatwar</h3>
              <blockquote className="x-quote">
                &ldquo;We believe students thrive when the leadership is directly engaged in the classroom. At CSI, we know every student by name, track their weekly progress, and mentor them like family.&rdquo;
                <cite>Mrs. Meghna Marchatwar, M.Sc. in Biology, B.Ed., A.D.I.D. (15+ Years Experience)</cite>
              </blockquote>
              <ul className="x-ticks">
                {accountability.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <DemoButton className="x-btn x-btn-gold" >Book a free demo class</DemoButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
