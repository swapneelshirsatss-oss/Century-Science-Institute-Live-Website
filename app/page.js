import Link from "next/link";
import AtomCanvas from "@/components/site/AtomCanvas";
import CountUp from "@/components/site/CountUp";
import DemoButton from "@/components/site/DemoButton";
import PhotoSlot from "@/components/site/PhotoSlot";
import { contact, courses, director, featuredTopper, tickerItems, toppers } from "@/data/site";

/* Title and description kept from the live homepage (SEO continuity). */
export const metadata = {
  title: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
  description:
    "Top-rated coaching for JEE, NEET & CET in Nagpur. Expert faculty, proven results & personalized learning. Enroll today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
    description: "Top-rated coaching for JEE, NEET & CET in Nagpur. Expert faculty, proven results & personalized learning.",
    url: "/",
  },
};

/* Hero photo: set to e.g. "/photos/classroom.webp" once the institute supplies one. */
const HERO_PHOTO = null;

/* Sine path for the Double Teaching waves (two periods wider than the view, for a seamless loop). */
function wave(amp, mid = 60, period = 200, width = 2400, step = 10) {
  const pts = [];
  for (let x = 0; x <= width; x += step) pts.push(`${x},${(mid - amp * Math.sin((2 * Math.PI * x) / period)).toFixed(1)}`);
  return "M" + pts.join(" L");
}

export default function HomePage() {
  const tickerRow = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="x-hero" aria-labelledby="hero-title">
        {HERO_PHOTO && (
          <div className="x-hero-photo">
            <PhotoSlot src={HERO_PHOTO} alt="Class in session at Century Science Institute, Nagpur" priority sizes="100vw" />
          </div>
        )}
        <AtomCanvas />
        <div className="x-wrap">
          <div className="x-hero-in">
            <p className="x-kicker"><i aria-hidden="true" />Admissions open for 2027–28</p>
            <h1 id="hero-title" className="x-big">
              <span>Two hours.</span>
              <span>Two exams.</span>
              <span>One teacher.</span>
            </h1>
            <p className="x-lead">
              Every day at Century Science Institute, the first hour prepares you for the board exam and the second for
              JEE, NEET or MHT-CET. Same teacher, same topic, two levels.
            </p>
            <div className="x-ctas">
              <DemoButton />
              <Link className="x-btn x-btn-line" href="#results">See our results</Link>
            </div>
          </div>
        </div>
        <div className="x-ticker" aria-label="Recent results">
          <ul>
            {tickerRow.map((t, i) => (
              <li key={i} aria-hidden={i >= tickerItems.length ? "true" : undefined}>
                <b>{t.score}</b>{t.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="x-sec" id="results" aria-labelledby="results-title">
        <div className="x-wrap">
          <p className="x-eyebrow">Results</p>
          <h2 id="results-title" className="x-big x-h2">Nagpur&apos;s toppers studied here.</h2>
          <div className="x-board">
            <div className="x-board-txt">
              <CountUp className="x-score" value={featuredTopper.score} />
              <p className="x-score-l">{featuredTopper.label}</p>
              <p className="x-score-n">{featuredTopper.name}</p>
            </div>
            <PhotoSlot src={featuredTopper.photo} alt={featuredTopper.name} label="Topper portrait, 4:5" note={featuredTopper.name} />
          </div>
          <div className="x-wall">
            {toppers.map((t) => (
              <div className="x-tp" key={t.name}>
                <PhotoSlot src={t.photo} alt={t.name} label="Photo, 1:1" note={t.name} sizes="(max-width: 860px) 50vw, 25vw" />
                <p className="x-tp-r">{t.result}</p>
                <p className="x-tp-n">{t.name}</p>
                <p className="x-tp-e">{t.exam}</p>
              </div>
            ))}
          </div>
          <p className="x-more"><Link href="/topper-jee-neet-cet-12th-sci/">See every topper</Link></p>
        </div>
      </section>

      {/* ================= DOUBLE TEACHING ================= */}
      <section className="x-sec x-dt" id="method" aria-labelledby="method-title">
        <div className="x-wrap">
          <p className="x-eyebrow">How we teach</p>
          <h2 id="method-title" className="x-big x-h2">Boards and entrance. Same day.</h2>
          <p className="x-sub">
            Most students are told to pick one in Class 12. At CSI, every topic is taught twice, so board marks and
            entrance rank grow together.
          </p>
          <figure className="x-waves">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
              <g className="x-wv">
                <path className="w1" d={wave(12)} />
                <path className="w2" d={wave(12)} />
                <path className="w3" d={wave(26)} />
              </g>
            </svg>
            <figcaption>
              <span className="k1">Board hour</span> + <span className="k2">Entrance hour</span>, in phase ={" "}
              <span className="k3">a bigger result</span>
            </figcaption>
          </figure>
          <div className="x-hours">
            <div className="x-h1b">
              <p className="t">Hour 1<br />Board</p>
              <p>State Board or CBSE syllabus, written in full steps the way examiners mark it.</p>
            </div>
            <div className="x-h2b">
              <p className="t">Hour 2<br />Rank</p>
              <p>The same topic at JEE, NEET or MHT-CET level, with shortcuts, traps and timed practice.</p>
            </div>
          </div>
          <div className="x-facts">
            <div><b>40</b><span>students at most in a batch</span></div>
            <div><b>2 hrs</b><span>of teaching, every day</span></div>
            <div><b>Weekly</b><span>tests, with a full mock each month</span></div>
            <div><b>7 days</b><span>open, 8:00 am to 8:30 pm</span></div>
          </div>
        </div>
      </section>

      {/* ================= DIRECTOR ================= */}
      <section className="x-sec" aria-labelledby="dir-title">
        <div className="x-wrap x-dir">
          <PhotoSlot src={director.photo} alt={director.name} label="Director portrait, 4:5" note={director.name} />
          <div>
            <p className="x-eyebrow">Who teaches</p>
            <h2 id="dir-title" className="x-big x-h2">The directors take the class.</h2>
            <p className="x-sub">
              {director.name} runs Century Science Institute and teaches NEET Biology herself, reading NCERT line by line
              with diagram practice. No outsourced faculty, no recorded lectures.
            </p>
            <div className="x-creds">{director.creds.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="x-sec" id="courses" aria-labelledby="courses-title" style={{ paddingTop: 0 }}>
        <div className="x-wrap">
          <p className="x-eyebrow">Courses</p>
          <h2 id="courses-title" className="x-big x-h2">Pick your exam.</h2>
          <div className="x-courses">
            {courses.map((c) => (
              <Link className="x-crow" href={c.href} key={c.href}>
                <span className="nm">{c.name}</span>
                <span className="ds">{c.desc}</span>
                <span className="go">View course</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISIT ================= */}
      <section className="x-sec x-visit" id="visit" aria-labelledby="visit-title">
        <div className="x-wrap x-visit-grid">
          <div>
            <h2 id="visit-title" className="x-big x-h2" style={{ marginTop: 0 }}>Sit in a class before you pay a rupee.</h2>
            <div className="x-ctas">
              <DemoButton className="x-btn x-btn-ink">Book a free demo class</DemoButton>
              <a className="x-btn x-btn-ink" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp us</a>
            </div>
          </div>
          <dl>
            <div><dt>Address</dt><dd>{contact.address}</dd></div>
            <div><dt>Open</dt><dd>{contact.hours}</dd></div>
            <div><dt>Call</dt><dd><a href={`tel:${contact.phonePrimaryRaw}`}>{contact.phonePrimary}</a></dd></div>
            <div><dt>Directions</dt><dd><a href={contact.maps} target="_blank" rel="noopener">Open in Google Maps</a></dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
