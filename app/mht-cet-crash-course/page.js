import DocPage, { FaqBlock } from "@/components/site/DocPage";
export const metadata = {
  title: "MHT-CET Crash Course in Nagpur – Century Science Institute",
  description: "Join our intensive MHT-CET Crash Course in Nagpur. Rapid syllabus revision in 6 to 8 weeks, weekly full-length mocks and shortcut techniques.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-crash-course/"
  }
};

const faqs = [
  {
    q: "How many hours of daily coaching in the Crash Course?",
    a: "The crash course features 6 to 8 hours of daily rigorous teaching, problem-solving workshops, and mock tests."
  },
  {
    q: "Is study material included in the Crash Course fee?",
    a: "Yes. Students get easy-to-follow notes, formula sheets and shortcut techniques prepared by CSI faculty."
  }
];

export default function MhtCetCrashCoursePage() {
  const points = ["Complete Syllabus Revision in 6 to 8 Weeks", "Weekly Full-Length Mock Tests in Exam Conditions", "Special Math Shortcut Techniques for 2-Minute Question Solving", "Line-by-Line Biology & Organic Chemistry Rapid Fire Drills", "Micro-Level Negative Mark Elimination Strategy", "Direct Mentorship by Senior Subject Faculty"];
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "MHT-CET Coaching", href: "/mht-cet-coaching/" }, { label: "Crash Course", href: "/mht-cet-crash-course/" }]}
      pill="Intensive 6 to 8 week revision"
      title="MHT-CET Crash Course in Nagpur (PCM & PCB)"
      lead="Rapid revision, speed calculation shortcuts, formula drills, and daily computer-based mock tests engineered to maximize your MHT-CET percentile in the final weeks."
      about={[["Duration", "6 to 8 weeks"], ["Daily", "6 to 8 hours"], ["Tests", "Weekly full-length mocks"], ["For", "12th appearing and droppers, PCM & PCB"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Accelerate Your Score with Daily Intensive Exam Conditioning</h3>
              <p>The MHT-CET Crash Course at Century Science Institute is designed for 12th board appearing and dropper students who want to rapidly revise the entire Class 11 & 12 syllabus, eliminate calculation bottlenecks, and gain test-taking confidence.</p>
            </>
          ),
        },
        { id: "includes", label: "What you get", count: points.length, body: <ul className="gh-bullets">{points.map((x) => <li key={x}><strong>{x}</strong></li>)}</ul> },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: MHT-CET Crash Course", count: faqs.length, raw: true, body: <FaqBlock faqs={faqs} /> },
      ]}
    />
  );
}
