import DocPage, { FaqBlock } from "@/components/site/DocPage";
export const metadata = {
  title: "MHT-CET Test Series in Nagpur – Century Science Institute",
  description: "Enroll in the premier MHT-CET Test Series in Nagpur with real exam interface, performance ranking, and detailed video solutions.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-test-series/"
  }
};

const faqs = [
  {
    q: "Is the test series conducted on computers?",
    a: "Yes, students practice in our computer-based testing lab in Nagpur using the exact interface mandated by the Maharashtra State CET Cell."
  },
  {
    q: "Do students receive chapter-wise analysis?",
    a: "Yes, after every mock test, students receive detailed question-by-question analytics identifying weak topics, speed bottlenecks, and accuracy ratios."
  }
];

export default function MhtCetTestSeriesPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "MHT-CET Coaching", href: "/mht-cet-coaching/" }, { label: "Test Series", href: "/mht-cet-test-series/" }]}
      pill="State-of-the-Art CBT Exam Simulation"
      title="MHT-CET Test Series Program in Nagpur"
      lead="Real computer-based exam simulation, chapter-wise unit tests, semi-grand tests, and full-syllabus mock tests with detailed performance feedback."
      about={[["Tests", "30 unit, 10 semi-grand, 20 full mocks"], ["Format", "Computer-based (CBT)"], ["For", "PCM and PCB aspirants"], ["Location", "Hudkeshwar Road, Nagpur"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Turn Preparation into High Exam Percentile with Rigorous Mock Drills</h3>
              <p>The difference between a 90 percentile and a 99 percentile student in MHT-CET is pure test temperament. Our full-scale computer testing lab allows students to conquer exam anxiety and master 180-minute time management.</p>
            </>
          ),
        },
        { id: "includes", label: "What the test series includes", count: 6, body: <ul className="gh-bullets">{["30 Unit Tests (Class 11 & Class 12 Chapters)", "10 Semi-Grand Tests (Combined Modules)", "20 Full-Length MHT-CET CBT Mock Examinations", "Immediate In-Depth Performance & Percentile Ranking", "Doubt Redressal Sessions Following Every Test", "Available for both PCM & PCB Aspirants"].map((x) => <li key={x}><strong>{x}</strong></li>)}</ul> },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: MHT-CET Test Series", count: faqs.length, raw: true, body: <FaqBlock faqs={faqs} /> },
      ]}
    />
  );
}
