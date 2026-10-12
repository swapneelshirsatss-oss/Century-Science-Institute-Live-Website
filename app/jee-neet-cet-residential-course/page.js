import DocPage, { FaqBlock } from "@/components/site/DocPage";

export const metadata = {
  title: "JEE / NEET / CET Residential Coaching in Nagpur – CSI",
  description: "2-Year integrated residential coaching with hostel, mess, library, and 24x7 faculty mentoring in Nagpur for JEE, NEET, and MHT-CET aspirants.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-neet-cet-residential-course/"
  }
};

const faqs = [
  {
    q: "What facilities are provided in the residential program?",
    a: "Air-conditioned/spacious hostel rooms, nutritious dining, reference library access till late hours, supervised study hours, and 24/7 faculty mentoring."
  },
  {
    q: "Is the residential campus safe for outstation students?",
    a: "Yes, our private campus features 24/7 CCTV surveillance, biometric security, dedicated wardens, and strict zero-gadget study disciplines."
  }
];

const facilities = [
  ["Spacious Hostel", "Comfortable bedding, peaceful study tables, and regular housekeeping."],
  ["Nutritious Dining", "Hygienic vegetarian meals, breakfast, evening snacks, and milk."],
  ["24/7 Mentoring", "Resident teachers supervise nightly self-study sessions."],
];

export default function ResidentialCoachingPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "Residential Course", href: "/jee-neet-cet-residential-course/" }]}
      pill="All-Inclusive Campus & Hostel Program"
      title="JEE, NEET & CET Residential Course in Nagpur"
      lead="2-Year integrated residential coaching with hostel, hygienic mess, quiet library, and round-the-clock teacher availability in Nagpur."
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
