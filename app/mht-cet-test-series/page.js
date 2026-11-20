import DocPage, { FaqBlock } from "@/components/site/DocPage";
import { buildCourseSchema, DEFAULT_OG_IMAGE } from "@/lib/schema";

export const metadata = {
  title: "MHT-CET Test Series in Nagpur – Century Science Institute",
  description: "Enroll in the premier MHT-CET Test Series in Nagpur with real exam interface, performance ranking, and detailed video solutions.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-test-series/"
  },
  openGraph: {
    title: "MHT-CET Test Series in Nagpur – Century Science Institute",
    description: "50+ chapter-wise and full-length MHT-CET computer-based mock tests in Nagpur for PCM & PCB aspirants.",
    url: "https://centuryscienceinstitute.in/mht-cet-test-series/",
    images: [DEFAULT_OG_IMAGE],
  }
};

const faqs = [
  {
    q: "Is the test series conducted on computers?",
    a: "Yes. Tests follow the latest MHT-CET pattern and difficulty. Online mocks are taken in CSI's own computer test lab, alongside offline papers."
  },
  {
    q: "Do students receive chapter-wise analysis?",
    a: "Yes, after every mock test, students receive detailed question-by-question analytics identifying weak topics, speed bottlenecks, and accuracy ratios."
  }
];

const courseSchema = buildCourseSchema({
  name: "MHT-CET Test Series in Nagpur (PCM & PCB)",
  description: "50+ chapter-wise and full-length MHT-CET computer-based mock tests in Nagpur with question-wise analytics and doubt sessions.",
  path: "/mht-cet-test-series/",
});

export default function MhtCetTestSeriesPage() {
  return (
    <DocPage
      schema={courseSchema}
      crumbs={[{ label: "Home", href: "/" }, { label: "MHT-CET Coaching", href: "/mht-cet-coaching/" }, { label: "Test Series", href: "/mht-cet-test-series/" }]}
      pill="State-of-the-Art CBT Exam Simulation"
      title="MHT-CET Test Series Program in Nagpur"
      lead="Real computer-based exam simulation, chapter-wise unit tests, semi-grand tests, and full-syllabus mock tests with detailed performance feedback."
      about={[["Tests", "50+ chapter-wise and full-length"], ["Format", "Computer test lab and offline"], ["For", "PCM and PCB aspirants"], ["Location", "Hudkeshwar Road, Nagpur"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Turn Preparation into High Exam Percentile with Rigorous Mock Drills</h3>
              <p>The difference between a 90 percentile and a 99 percentile student in MHT-CET is pure test temperament. Regular full-length mocks in exam conditions help students handle exam pressure and manage the 180 minutes.</p>
            </>
          ),
        },
        { id: "includes", label: "What the test series includes", count: 6, body: <ul className="gh-bullets">{["50+ Chapter-wise and Full-Length Mock Tests", "Based on the Latest MHT-CET Syllabus and Difficulty", "Separate PCM and PCB Test Series", "Question-wise Analysis and Score Comparison", "Doubt Redressal Sessions Following Every Test", "Available for both PCM & PCB Aspirants"].map((x) => <li key={x}><strong>{x}</strong></li>)}</ul> },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: MHT-CET Test Series", count: faqs.length, raw: true, body: <FaqBlock faqs={faqs} /> },
      ]}
    />
  );
}
