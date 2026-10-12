import Link from "next/link";
import CourseTabs from "@/components/site/CourseTabs";
import DemoButton from "@/components/site/DemoButton";
import { toppersList } from "@/data/instituteData";
import { contact, courses } from "@/data/site";

const SITE = "https://centuryscienceinstitute.in";

/**
 * Course page in a calm, GitHub-like structure:
 * a path line and title, a sticky tab bar, a main column of bordered sections,
 * and an "About" sidebar with the key facts and the main action.
 */
export default function CoursePage({ c }) {
  const results = toppersList.filter((t) => t.category === c.resultsCategory);
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "how-we-teach", label: "How we teach" },
    { id: "syllabus", label: "Syllabus" },
    { id: "tests", label: "Tests", count: c.tests.length },
    { id: "results", label: "Results", count: results.length },
    { id: "faq", label: "FAQ", count: c.faqs.length },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: c.schema.name,
        description: c.schema.description,
        url: `${SITE}${c.path}`,
        provider: { "@type": "EducationalOrganization", name: "Century Science Institute", url: SITE },
        offers: { "@type": "Offer", category: "Classroom coaching", availability: "https://schema.org/InStock" },
        hasCourseInstance: { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Century Science Institute, Hudkeshwar Road, Nagpur" } },
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE}/coaching/` },
          { "@type": "ListItem", position: 3, name: c.crumb, item: `${SITE}${c.path}` },
        ],
      },
    ],
  };

  return (
    <div className="gh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="gh-head">
        <div className="x-wrap">
          <nav className="gh-path" aria-label="Breadcrumb">
            <Link href="/">CSI</Link><span aria-hidden="true">/</span>
            <Link href="/coaching/">Courses</Link><span aria-hidden="true">/</span>
            <strong>{c.crumb}</strong>
            <span className="gh-pill">Admissions open 2027–28</span>
          </nav>
          <h1 className="gh-title">{c.h1}</h1>
          <p className="gh-lead">{c.lead}</p>
        </div>
      </header>

      <CourseTabs tabs={tabs} />

      <div className="x-wrap gh-layout">
        <div className="gh-main">
          <section id="overview" className="gh-box">
            <h2 className="gh-box-h">Overview</h2>
            <div className="gh-box-b">
              <h3>{c.overview.title}</h3>
              {c.overview.paras.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </section>

          <section id="how-we-teach" className="gh-box">
            <h2 className="gh-box-h">How we teach</h2>
            <div className="gh-box-b">
              <div className="gh-split" aria-label="Double Teaching">
                <div><b>Hour 1</b>Board syllabus, in full steps</div>
                <div className="g"><b>Hour 2</b>The same topic at entrance level</div>
              </div>
              <ul className="gh-list">
                {c.method.map(([h, d]) => (
                  <li key={h}><strong>{h}</strong><span>{d}</span></li>
                ))}
              </ul>
            </div>
          </section>

          <section id="syllabus" className="gh-box">
            <h2 className="gh-box-h">Syllabus</h2>
            <div className="gh-table-wrap">
              <table className="gh-table">
                <thead><tr><th scope="col">Subject</th><th scope="col">What we cover</th></tr></thead>
                <tbody>{c.syllabus.map(([s, d]) => <tr key={s}><th scope="row">{s}</th><td>{d}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section id="tests" className="gh-box">
            <h2 className="gh-box-h">Tests <span className="gh-count">{c.tests.length}</span></h2>
            <div className="gh-table-wrap">
              <table className="gh-table">
                <thead><tr><th scope="col">Test</th><th scope="col">How often</th><th scope="col">Format</th></tr></thead>
                <tbody>{c.tests.map(([t, f, m]) => <tr key={t}><th scope="row">{t}</th><td>{f}</td><td>{m}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section id="results" className="gh-box">
            <h2 className="gh-box-h">Results <span className="gh-count">{results.length}</span></h2>
            {results.length ? (
              <ul className="gh-rows">
                {results.map((t) => (
                  <li key={t.name}>
                    <span className="gh-av" aria-hidden="true">{t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                    <span className="gh-rn"><strong>{t.name}</strong><small>{t.achievement}</small></span>
                    <span className="gh-score">{t.score}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="gh-box-b">Results for this course will be listed here.</p>
            )}
            <p className="gh-box-foot"><Link href="/topper-jee-neet-cet-12th-sci/">See all toppers</Link></p>
          </section>

          <section id="faq" className="gh-box">
            <h2 className="gh-box-h">Frequently asked questions <span className="gh-count">{c.faqs.length}</span></h2>
            <div className="gh-faq">
              {c.faqs.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="gh-side" aria-label="About this course">
          <div className="gh-side-in">
            <h2>About</h2>
            <dl className="gh-facts">
              {c.about.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <DemoButton className="x-btn x-btn-gold gh-cta">Book a free demo class</DemoButton>
            <a className="gh-side-link" href={`tel:${contact.phonePrimaryRaw}`}>Call {contact.phonePrimary}</a>
            <hr />
            <h2>Centre</h2>
            <p className="gh-side-p">{contact.address}</p>
            <a className="gh-side-link" href={contact.maps} target="_blank" rel="noopener">Get directions</a>
            <hr />
            <h2>Other courses</h2>
            <ul className="gh-side-list">
              {courses.filter((x) => x.href !== c.path).map((x) => (
                <li key={x.href}><Link href={x.href}>{x.name === "11th & 12th" ? "11th & 12th Science" : `${x.name} coaching`}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
