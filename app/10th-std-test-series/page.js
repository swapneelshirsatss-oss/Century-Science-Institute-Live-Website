import PageHero from "@/components/site/PageHero";
import DemoButton from "@/components/site/DemoButton";
import { contact } from "@/data/site";

/* Live URL kept. Title kept from the live page; the description replaces the live 3-word placeholder. */
export const metadata = {
  title: "10th Std Test Series - Century Science Institute",
  description:
    "10th Std test series in Nagpur on the SSC and CBSE board pattern: chapter-wise and full-length tests, board-style checking, weekly scorecards and doubt-solving at Century Science Institute.",
  alternates: { canonical: "/10th-std-test-series/" },
  openGraph: {
    title: "10th Std Test Series - Century Science Institute",
    description: "Board-pattern tests for Class 10 in Nagpur with board-style checking and weekly scorecards.",
    url: "/10th-std-test-series/",
  },
};

const points = [
  { h: "Board-pattern papers", p: "Chapter-wise and full-length tests modelled on SSC and CBSE board exams, set by the institute's faculty." },
  { h: "Checked like the board", p: "Every paper is marked with the board's marks distribution, so students see where marks are lost." },
  { h: "Weekly scorecards", p: "Individual feedback and a scorecard each week, shared with parents." },
  { h: "Pre-board mocks", p: "Several full pre-board papers before the final exam, with time-management practice." },
  { h: "Doubt-solving and revision", p: "Subject-wise sessions to clear doubts and revise weak chapters." },
  { h: "Next step after Class 10", p: "Students can move straight into the 2-year integrated JEE, NEET or MHT-CET batch." },
];

export default function TenthTestSeries() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Courses", href: "/coaching/" }, { label: "10th Std test series" }]}
        eyebrow="SSC and CBSE pattern"
        title="10th Std test series"
        lead="Weekly board-pattern tests for Class 10 students on Hudkeshwar Road, Nagpur, checked the way board examiners mark."
      >
        <div className="x-ctas"><DemoButton>Book a free demo class</DemoButton></div>
      </PageHero>
      <section className="x-sec">
        <div className="x-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px 40px" }}>
          {points.map((x) => (
            <div key={x.h} style={{ borderTop: "3px solid var(--ink)", paddingTop: 16 }}>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>{x.h}</h2>
              <p style={{ margin: "8px 0 0", color: "var(--ink-2)" }}>{x.p}</p>
            </div>
          ))}
        </div>
        <div className="x-wrap" style={{ marginTop: 48 }}>
          <p style={{ color: "var(--ink-2)" }}>Call {contact.phonePrimary} or visit the campus at {contact.address}.</p>
        </div>
      </section>
    </>
  );
}
