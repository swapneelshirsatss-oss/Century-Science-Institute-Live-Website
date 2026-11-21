import Link from "next/link";
import AtomCanvas from "@/components/site/AtomCanvas";
import CountUp from "@/components/site/CountUp";
import DemoButton from "@/components/site/DemoButton";
import PhotoSlot from "@/components/site/PhotoSlot";
import TestCalendar from "@/components/site/TestCalendar";
import Ticker from "@/components/site/Ticker";
import VideoRail from "@/components/site/VideoRail";
import { contact, courses, director, featuredTopper, gmb, tickerItems, toppers, videos, youtubeChannel } from "@/data/site";
import { photos } from "@/data/photos";
import { DEFAULT_OG_IMAGE, JsonLd, SITE } from "@/lib/schema";

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
    images: [DEFAULT_OG_IMAGE],
  },
};

/* Hero photo: real class in session, shown behind the dark gradient. */
const HERO_PHOTO = photos.classroom;

/* Sine path for the Double Teaching waves (two periods wider than the view, for a seamless loop). */
function wave(amp, mid = 60, period = 200, width = 2400, step = 10) {
  const pts = [];
  for (let x = 0; x <= width; x += step) pts.push(`${x},${(mid - amp * Math.sin((2 * Math.PI * x) / period)).toFixed(1)}`);
  return "M" + pts.join(" L");
}

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: "Century Science Institute – Top NEET, JEE & MHT-CET Coaching in Nagpur",
      description:
        "Top-rated coaching for JEE, NEET & CET in Nagpur. Expert faculty, proven results & personalized learning. Enroll today.",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#hero-title", "#direct-answer-summary"],
      },
    },
    ...videos.map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: `${v.title} — Century Science Institute, Hudkeshwar Road, Nagpur.`,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
      uploadDate: "2025-10-01T00:00:00+05:30",
      publisher: { "@id": `${SITE}/#organization` },
    })),
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      {/* ================= HERO ================= */}
      <section className="x-hero" aria-labelledby="hero-title">
        {HERO_PHOTO && (
          <div className="x-hero-photo">
            <PhotoSlot src={HERO_PHOTO} alt="Class in session at Century Science Institute, Nagpur" priority sizes="100vw" quality={60} />
          </div>
        )}
        <AtomCanvas />
        <div className="x-wrap">
          <div className="x-hero-in">
            <p className="x-kicker">Admissions open for 2027-28</p>
            <h1 id="hero-title" className="x-big">
              <span>Two exams.</span>
              <span>One coaching.</span>
            </h1>
            <p id="direct-answer-summary" className="x-lead">
              Board exam in the first hour. JEE, NEET or MHT-CET in the second. Same teacher, same topic, every day.
            </p>
            <div className="x-ctas">
              <DemoButton />
              <Link className="x-btn x-btn-line" href="#results">See our results</Link>
            </div>
          </div>
        </div>
        <Ticker items={tickerItems} />
      </section>

      {/* ================= RESULTS ================= */}
      <section className="x-sec" id="results" aria-labelledby="results-title">
        <div className="x-wrap">
          <p className="x-eyebrow">Results</p>
          <h2 id="results-title" className="x-big x-h2 x-pat">Nagpur&apos;s toppers studied here.</h2>
          <div className="x-board">
            <div className="x-board-txt">
              <CountUp className="x-score" value={featuredTopper.score} />
              <p className="x-score-l">{featuredTopper.label}</p>
              <p className="x-score-n">{featuredTopper.name}</p>
            </div>
            <PhotoSlot
              src={featuredTopper.photo}
              alt={`${featuredTopper.name} – ${featuredTopper.score} ${featuredTopper.label} at Century Science Institute Nagpur`}
              label="Topper portrait, 4:5"
              note={featuredTopper.name}
            />
          </div>
          <div className="x-wall">
            {toppers.map((t) => (
              <div className="x-tp" key={t.name}>
                <PhotoSlot
                  src={t.photo}
                  alt={`${t.name} – ${t.result} ${t.exam} topper at Century Science Institute Nagpur`}
                  label="Photo, 1:1"
                  note={t.name}
                  sizes="(max-width: 860px) 50vw, 25vw"
                />
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
          <h2 id="method-title" className="x-big x-h2 x-pat" style={{ marginTop: 0 }}>Boards and entrance. Same day.</h2>
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
            <div><b>2 hrs</b><span>a day: 1 board hour, 1 entrance hour</span></div>
            <div><b>Weekly</b><span>tests, plus monthly full-length mocks</span></div>
            <div><b>15+ yrs</b><span>teaching experience: the director takes classes</span></div>
            <div><b>Own</b><span>building with library, computer test lab and CCTV</span></div>
          </div>
          <TestCalendar />
        </div>
      </section>

      {/* ================= DIRECTOR ================= */}
      <section className="x-sec" aria-labelledby="dir-title">
        <div className="x-wrap x-dir">
          <PhotoSlot
            src={director.photo}
            alt="Mrs. Meghana Marchatwar, Director and NEET Biology Faculty at Century Science Institute, Nagpur"
            label="Director portrait, 4:5"
            note={director.name}
          />
          <div>
            <h2 id="dir-title" className="x-big x-h2" style={{ marginTop: 0 }}>The directors take the class.</h2>
            <p className="x-sub">
              {director.name} runs Century Science Institute and teaches NEET Biology herself, chapter by chapter from
              NCERT. At CSI, the directors are the tutors.
            </p>
            <div className="x-creds">{director.creds.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
        </div>
      </section>

      {/* ================= VIDEOS ================= */}
      <section className="x-sec x-band-soft" aria-labelledby="vid-title">
        <div className="x-wrap">
          <h2 id="vid-title" className="x-big x-h2 x-pat" style={{ marginTop: 0 }}>See CSI on video.</h2>
          <VideoRail videos={videos} />
          <p className="x-more"><a href={youtubeChannel} target="_blank" rel="noopener">More on our YouTube channel</a></p>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="x-sec" id="courses" aria-labelledby="courses-title">
        <div className="x-wrap">
          <h2 id="courses-title" className="x-big x-h2 x-pat" style={{ marginTop: 0 }}>Pick your exam.</h2>
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
            <h2 id="visit-title" className="x-big x-h2" style={{ marginTop: 0 }}>Talk to us before you decide.</h2>
            <div className="x-ctas">
              <DemoButton className="x-btn x-btn-ink">Book free counselling</DemoButton>
              <a className="x-btn x-btn-ink" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp us</a>
            </div>
          </div>
          <dl>
            <div><dt>Address</dt><dd>{contact.address}</dd></div>
            <div><dt>Open</dt><dd>{contact.hours}</dd></div>
            <div><dt>Call</dt><dd><a href={`tel:${contact.phonePrimaryRaw}`}>{contact.phonePrimary}</a></dd></div>
            <div><dt>Reviews</dt><dd><a href={gmb.reviewsUrl} target="_blank" rel="noopener">{gmb.rating} ★ ({gmb.reviewCount} Google reviews)</a></dd></div>
            <div><dt>Directions</dt><dd><a href={contact.maps} target="_blank" rel="noopener">Open in Google Maps</a></dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
