import DocPage, { FaqBlock } from "@/components/site/DocPage";
import { buildCourseSchema, DEFAULT_OG_IMAGE } from "@/lib/schema";

export const metadata = {
  title: "Naval Academy Exam Preparation in Nagpur – Century Science Institute",
  description: "Expert Naval Academy exam coaching in Nagpur with disciplined training, JEE score enhancement, and SSB interview guidance.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/naval-academy-exam-preparation/"
  },
  openGraph: {
    title: "Naval Academy Exam Preparation in Nagpur – Century Science Institute",
    description: "Specialized Indian Naval Academy 10+2 B.Tech Cadet Entry coaching in Nagpur with JEE Main score enhancement and SSB interview guidance.",
    url: "https://centuryscienceinstitute.in/naval-academy-exam-preparation/",
    images: [DEFAULT_OG_IMAGE],
  }
};

const faqs = [
  {
    q: "How does CSI prepare students for the Naval Academy Cadet Entry Scheme?",
    a: "Cadet entry for INA requires high JEE Mains percentiles and high Class 12 PCM marks. We train students to excel in JEE Mains physics, math, and chemistry while grooming them for SSB interviews."
  }
];

const courseSchema = buildCourseSchema({
  name: "Naval Academy (10+2 B.Tech Cadet Entry) Preparation in Nagpur",
  description: "Specialized coaching in Nagpur for Indian Naval Academy 10+2 B.Tech Cadet Entry Scheme focusing on Class 12 PCM, JEE Main cutoff and SSB interview.",
  path: "/naval-academy-exam-preparation/",
});

export default function NavalAcademyPage() {
  return (
    <DocPage
      schema={courseSchema}
      crumbs={[{ label: "Home", href: "/" }, { label: "Naval Academy Prep", href: "/naval-academy-exam-preparation/" }]}
      pill="Indian Naval Academy 10+2 Cadet Entry"
      title="Naval Academy (10+2 B.Tech Cadet Entry) Preparation"
      lead="Specialized coaching for Indian Naval Academy 10+2 Cadet Entry Scheme. Maximize your JEE Mains score and Class 12 PCM marks with expert coaching in Nagpur."
      about={[["Entry", "INA 10+2 B.Tech Cadet Entry"], ["Selection", "JEE Main score, then SSB interview"], ["Focus", "Class 12 PCM and JEE Main"], ["Location", "Hudkeshwar Road, Nagpur"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Strategic Training for Commissioned Officer Selection</h3>
              <p>The Indian Naval Academy 10+2 B.Tech Entry requires candidates to clear high JEE Main cutoffs, followed by 5-day SSB interviews. Century Science Institute ensures your PCM scores meet the cutoff while building mental agility, communication clarity, and problem-solving speed.</p>
            </>
          ),
        },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: Naval Academy Preparation", count: faqs.length, raw: true, body: <FaqBlock faqs={faqs} /> },
      ]}
    />
  );
}
