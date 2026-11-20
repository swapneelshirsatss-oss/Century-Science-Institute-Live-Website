import DocPage, { FaqBlock } from "@/components/site/DocPage";
import { buildCourseSchema, DEFAULT_OG_IMAGE } from "@/lib/schema";

export const metadata = {
  title: "JEE / NEET / CET Residential Coaching in Nagpur – CSI",
  description: "2-year residential JEE, NEET and MHT-CET coaching in Nagpur: separate hostels for boys and girls, CCTV, 24x7 security and monitored self-study.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-neet-cet-residential-course/"
  },
  openGraph: {
    title: "JEE / NEET / CET Residential Coaching in Nagpur – CSI",
    description: "2-year residential JEE, NEET and MHT-CET coaching in Nagpur with separate hostels for boys and girls, balanced meals, CCTV and monitored self-study.",
    url: "https://centuryscienceinstitute.in/jee-neet-cet-residential-course/",
    images: [DEFAULT_OG_IMAGE],
  }
};

const faqs = [
  {
    q: "What facilities are provided in the residential program?",
    a: "Separate hostels for boys and girls, a hygienic and balanced diet, study halls with monitored self-study hours, and faculty support beyond classroom hours."
  },
  {
    q: "Is the residential campus safe for outstation students?",
    a: "Yes. Boys and girls stay in separate hostels with CCTV, 24x7 security and a disciplined daily routine."
  }
];

const facilities = [
  ["Spacious Hostel", "Comfortable bedding, peaceful study tables, and regular housekeeping."],
  ["Nutritious Dining", "Hygienic vegetarian meals, breakfast, evening snacks, and milk."],
  ["Monitored self-study", "Study halls with supervised self-study hours."],
  ["CCTV and 24x7 security", "CCTV cameras and round-the-clock security."],
  ["Computer test lab", "Online mock tests in the institute's own computer lab."],
];

const courseSchema = buildCourseSchema({
  name: "JEE, NEET & MHT-CET 2-Year Residential Course in Nagpur",
  description: "2-year residential coaching in Nagpur for JEE, NEET and MHT-CET with separate hostels for boys and girls, balanced meals, CCTV and monitored self-study.",
  path: "/jee-neet-cet-residential-course/",
});

export default function ResidentialCoachingPage() {
  return (
    <DocPage
      schema={courseSchema}
      crumbs={[{ label: "Home", href: "/" }, { label: "Residential Course", href: "/jee-neet-cet-residential-course/" }]}
      pill="All-Inclusive Campus & Hostel Program"
      title="JEE, NEET & CET Residential Course in Nagpur"
      lead="2-year residential coaching in Nagpur with separate hostels for boys and girls, balanced meals and monitored self-study."
      about={[["Duration", "2-year integrated"], ["For", "JEE, NEET and MHT-CET aspirants"], ["Includes", "Hostel, mess, library, supervised study"], ["Location", "Hudkeshwar Road, Nagpur"]]}
      sections={[
        {
          id: "overview", label: "Overview",
          body: (
            <>
              <h3>Total Academic Immersion with Zero Daily Distractions</h3>
              <p>For students seeking absolute concentration away from smartphone addictions, social media, and daily commute exhaustion, our residential campus in Nagpur provides a disciplined gurukul-like learning environment.</p>
            </>
          ),
        },
        { id: "facilities", label: "Facilities", count: facilities.length, body: <ul className="gh-list">{facilities.map(([h, d]) => <li key={h}><strong>{h}</strong><span>{d}</span></li>)}</ul> },
        { id: "faq", label: "FAQ", heading: "Frequently Asked Questions: Residential Coaching", count: faqs.length, raw: true, body: <FaqBlock faqs={faqs} /> },
      ]}
    />
  );
}
