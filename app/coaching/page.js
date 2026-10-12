import Link from "next/link";
import PageHero from "@/components/site/PageHero";
import DemoButton from "@/components/site/DemoButton";

/* Live URL /coaching/ (top-nav hub on the WordPress site). Title kept from the live page. */
export const metadata = {
  title: "Top Coaching Classes in Nagpur | NEET, JEE, CET & Science – CSI",
  description:
    "Looking for reliable Coaching Classes in Nagpur? Century Science Institute offers NEET, JEE and MHT-CET coaching with experienced faculty, small batches and steady academic guidance.",
  alternates: { canonical: "/coaching/" },
  openGraph: {
    title: "Top Coaching Classes in Nagpur | NEET, JEE, CET & Science – CSI",
    description: "NEET, JEE and MHT-CET coaching in Nagpur with Double Teaching, small batches and weekly tests.",
    url: "/coaching/",
  },
};

const groups = [
  {
    title: "Entrance coaching",
    items: [
      { name: "JEE coaching", href: "/jee-coaching/", desc: "JEE Main and Advanced: in-depth Physics, Chemistry and Maths, heavy problem practice and regular progress checks." },
      { name: "NEET coaching", href: "/neet-coaching/", desc: "Physics, Chemistry and NCERT Biology with frequent mock tests and individual mentoring." },
      { name: "MHT-CET coaching", href: "/mht-cet-coaching/", desc: "Full syllabus for engineering and pharmacy seats in Maharashtra, with practice papers and time management." },
    ],
  },
  {
    title: "Board and school",
    items: [
      { name: "11th & 12th Science", href: "/11-12-th-science-coaching/", desc: "A solid base in Physics, Chemistry and Maths or Biology, with revision and exam strategy for boards." },
      { name: "10th Std test series", href: "/10th-std-test-series/", desc: "SSC and CBSE-pattern tests, checked the way board examiners mark, with weekly scorecards." },
    ],
  },
  {
    title: "Tests and short courses",
    items: [
      { name: "MHT-CET test series", href: "/mht-cet-test-series/", desc: "Structured tests for Class 12 candidates to practise, review and measure performance." },
      { name: "MHT-CET crash course", href: "/mht-cet-crash-course/", desc: "A short, intensive programme to raise scores in Physics, Chemistry and Maths or Biology." },
    ],
  },
  {
    title: "Defence and residential",
    items: [
      { name: "NDA 2-year residential", href: "/national-defence-academy-exam-preparation-2-years-residential-course/", desc: "NDA and Naval Academy written-exam preparation alongside Class 11 and 12 Science." },
      { name: "Naval Academy preparation", href: "/naval-academy-exam-preparation/", desc: "Maths, Physics, Chemistry and General Ability for the Indian Naval Academy entrance." },
      { name: "Residential course", href: "/jee-neet-cet-residential-course/", desc: "JEE, NEET and MHT-CET preparation with hostel, a fixed daily routine and round-the-clock academic support." },
    ],
  },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Courses" }]}
        eyebrow="Admissions open for 2027–28"
        title="Coaching classes in Nagpur"
        lead="Every course at Century Science Institute follows Double Teaching: one hour of board syllabus and one hour of entrance practice, every day, in batches of 30 to 40."
      >
        <div className="x-ctas"><DemoButton /></div>
      </PageHero>
      <section className="x-sec">
        <div className="x-wrap">
          {groups.map((g) => (
            <div key={g.title} style={{ marginBottom: 56 }}>
              <h2 className="x-eyebrow" style={{ fontSize: 16 }}>{g.title}</h2>
              <div className="x-courses" style={{ marginTop: 14 }}>
                {g.items.map((c) => (
                  <Link className="x-crow" href={c.href} key={c.href}>
                    <span className="nm" style={{ fontSize: "clamp(32px,4vw,48px)" }}>{c.name}</span>
                    <span className="ds">{c.desc}</span>
                    <span className="go">View course</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
