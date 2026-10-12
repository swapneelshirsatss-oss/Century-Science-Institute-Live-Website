import DocPage, { FaqBlock } from "@/components/site/DocPage";
export const metadata = {
  title: "NDA Exam Preparation 2-Year Residential Course in Nagpur – CSI",
  description: "Comprehensive 2-Year NDA Residential Course in Nagpur with integrated 11th-12th Science, physical drills, SSB mentoring & mock tests.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/national-defence-academy-exam-preparation-2-years-residential-course/"
  }
};

const faqs = [
  {
    q: "Who is eligible for the 2-Year NDA Residential Course?",
    a: "Class 10th passed students (Boys and Girls) aspiring to join the Armed Forces as commissioned officers through NDA."
  },
  {
    q: "Is 11th and 12th Board coaching covered alongside NDA preparation?",
    a: "Yes, the course seamlessly covers the full 11th and 12th Science (PCM) board curriculum alongside UPSC NDA written exam syllabus and SSB foundation."
  }
];

export default function NdaResidentialPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "NDA 2-Year Residential", href: "/national-defence-academy-exam-preparation-2-years-residential-course/" }]}
      pill="Officer Training Pathway"
      title="National Defence Academy (NDA) 2-Year Residential Course"
      lead="Integrated 11th & 12th Science coaching with UPSC NDA written exam preparation, SSB interview fundamentals, personality development, and residential boarding in Nagpur."
      about={[["Duration", "2 years (Class 11 and 12)"], ["Eligibility", "Class 10 passed, boys and girls"], ["Covers", "UPSC NDA written, SSB basics, PCM boards"], ["Format", "Residential, Nagpur"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Disciplined Officer Cadet Preparation from Class 11th</h3>
              <p>The NDA written exam conducted by UPSC tests Mathematics and General Ability (English, Physics, Chemistry, General Science, History, Geography, and Current Affairs). Our integrated residential course prepares students comprehensively while ensuring top marks in 12th board exams.</p>
            </>
          ),
        },
        { id: "includes", label: "Course includes", count: 6, body: <ul className="gh-bullets">{["Mathematics (Algebra, Trig, Calculus & Stats)", "General Ability Test (English & General Science)", "Physical Fitness Drills & Morning Conditioning", "SSB Interview Fundamentals & Public Speaking", "11th & 12th Science State / CBSE Board Scoring", "Hostel, Supervised Evening Prep & Nutritious Mess"].map((x) => <li key={x}><strong>{x}</strong></li>)}</ul> },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: NDA Residential Course", count: faqs.length, raw: true, body: <FaqBlock faqs={faqs} /> },
      ]}
    />
  );
}
