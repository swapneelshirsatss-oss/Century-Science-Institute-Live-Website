import DocPage, { FaqBlock, DoubleTeachingDoc } from "@/components/site/DocPage";

export const metadata = {
  title: "11th & 12th Science Coaching Classes in Nagpur",
  description: "Join CSI Nagpur for 11th & 12th Science coaching for State Board / CBSE. Expert faculty, strong fundamentals, and personal guidance for exam success.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/11-12-th-science-coaching/"
  },
  openGraph: {
    title: "11th & 12th Science Coaching Classes in Nagpur",
    description: "Join CSI Nagpur for 11th & 12th Science coaching for State Board / CBSE. Expert faculty and strong fundamentals.",
    url: "https://centuryscienceinstitute.in/11-12-th-science-coaching/"
  }
};

const boardFaqs = [
  {
    q: "Do you cover both CBSE and Maharashtra State Board syllabus?",
    a: "Yes, our faculty conducts dedicated curriculum tracks aligned with both Maharashtra State Board and CBSE Class 11 and 12 textbooks."
  },
  {
    q: "How does the Double Teaching Concept help 11th & 12th students?",
    a: "Students do not have to juggle two different tuitions. Hour 1 guarantees top board theory marks and answer-writing skills; Hour 2 equips them for JEE, NEET, or MHT-CET success."
  },
  {
    q: "What subjects are taught for 11th and 12th Science?",
    a: "We provide complete coaching for Physics, Chemistry, Mathematics, and Biology (PCMB) along with board practical guidance."
  }
];

const subjects = [
  ["Physics Fundamentals", "Mastering formulas, SI units, derivations, and board diagrams alongside numerical problems."],
  ["Chemistry Mastery", "Balanced equations, organic reaction conversions, named reactions, and inorganic charts."],
  ["Mathematics & Calculus", "Step-by-step theorem proofs, step-marking practice, and rapid calculation methods."],
  ["Biology Diagrams & Theory", "High-scoring diagram labeling and descriptive answer presentation led by Meghna Ma'am."],
];

export default function Class1112CoachingPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "11th & 12th Science Coaching", href: "/11-12-th-science-coaching/" }]}
      pill="Board & Concept Foundation"
      title="11th & 12th Science Coaching Classes in Nagpur"
      lead="Comprehensive Class 11 & 12 Science coaching for State Board and CBSE. Build unshakable concepts in Physics, Chemistry, Mathematics, and Biology with personalized mentor attention."
      aboutTitle="Class 11 & 12 Science Admissions"
      about={[["Boards", "State Board & CBSE"], ["Subjects", "Physics, Chem, Math, Bio"], ["Batch Size", "30–40 Students"], ["Location", "Hudkeshwar Road, Nagpur"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Build Strong Foundation for Board Distinction & Competitive Exams</h3>
              <p>Class 11 and 12 form the bedrock of a student&apos;s academic journey. Without disciplined concept building in these crucial years, attempting competitive entrance exams leads to anxiety and underperformance.</p>
              <p>Century Science Institute provides an all-in-one ecosystem where board syllabus and competitive fundamentals are taught together harmoniously by dedicated senior subject teachers.</p>
            </>
          ),
        },
        { id: "subjects", label: "Subjects", count: subjects.length, body: <ul className="gh-list">{subjects.map(([h, d]) => <li key={h}><strong>{h}</strong><span>{d}</span></li>)}</ul> },
        { id: "how-we-teach", label: "How we teach", body: <DoubleTeachingDoc /> },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: 11th & 12th Science Coaching", count: boardFaqs.length, raw: true, body: <FaqBlock faqs={boardFaqs} /> },
      ]}
    />
  );
}
