import PageHero from "@/components/site/PageHero";
import TopperBoard from "@/components/site/TopperBoard";
import DemoButton from "@/components/site/DemoButton";
import { JsonLd, SITE } from "@/lib/schema";

export const metadata = {
  title: "CSI NEET, JEE, CET Top Rankers from Nagpur",
  description: "Meet the NEET, JEE and MHT-CET toppers of Century Science Institute, Nagpur, including Tejas Dhande (99.23 percentile in MHT-CET).",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/topper-jee-neet-cet-12th-sci/"
  },
  openGraph: {
    title: "CSI NEET, JEE, CET Top Rankers from Nagpur",
    description: "Verified NEET, JEE Advanced, MHT-CET and HSC Science toppers of Century Science Institute, Nagpur.",
    url: "https://centuryscienceinstitute.in/topper-jee-neet-cet-12th-sci/",
    images: [{ url: "/photos/felicitation-group.jpg", alt: "Toppers at the Century Science Institute Felicitation Ceremony, Nagpur" }],
  }
};

const toppersPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE}/topper-jee-neet-cet-12th-sci/#webpage`,
  url: `${SITE}/topper-jee-neet-cet-12th-sci/`,
  name: "CSI NEET, JEE, CET Top Rankers from Nagpur",
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": `${SITE}/#organization` },
};

export default function ToppersPage() {
  return (
    <>
      <JsonLd data={toppersPageSchema} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Toppers & Results", href: "/topper-jee-neet-cet-12th-sci/" }]}
        eyebrow="Proven Student Achievements"
        size="md"
        title="Century Science Institute Hall of Fame"
        lead="Celebrate our toppers in NEET, IIT-JEE, MHT-CET, and Class 12 Science Board examinations who transformed their hard work into top ranks."
      />

      <section className="x-sec" aria-label="Toppers">
        <div className="x-wrap">
          <TopperBoard />
        </div>
      </section>

      <section className="x-sec x-visit" aria-labelledby="next-title">
        <div className="x-wrap x-visit-grid">
          <div>
            <h2 id="next-title" className="x-big x-h2" style={{ marginTop: 0, fontSize: "clamp(40px, 6vw, 80px)" }}>Want to be in next year&apos;s Hall of Fame?</h2>
          </div>
          <div>
            <p style={{ margin: "0 0 20px", fontSize: 18 }}>Join Nagpur&apos;s most disciplined and focused entrance coaching. Early admission benefits and scholarship diagnostics are now open for 2027-28.</p>
            <DemoButton className="x-btn x-btn-ink">Book free counselling</DemoButton>
          </div>
        </div>
      </section>
    </>
  );
}
