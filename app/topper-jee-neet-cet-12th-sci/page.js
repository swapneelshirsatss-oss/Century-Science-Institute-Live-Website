import PageHero from "@/components/site/PageHero";
import TopperBoard from "@/components/site/TopperBoard";
import DemoButton from "@/components/site/DemoButton";

export const metadata = {
  title: "CSI NEET, JEE, CET Top Rankers from Nagpur",
  description: "CSI Toppers – NEET, JEE, CET Top Rankers from Nagpur Meet the NEET, JEE & CET toppers from Century Science Institute, Nagpur. Consistent top ranks, 100% success stories.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/topper-jee-neet-cet-12th-sci/"
  }
};

export default function ToppersPage() {
  return (
    <>
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
            <p style={{ margin: "0 0 20px", fontSize: 18 }}>Join Nagpur&apos;s most disciplined and focused entrance coaching. Early admission benefits and scholarship diagnostics are now open for 2027–28.</p>
            <DemoButton className="x-btn x-btn-ink">Book a free demo class</DemoButton>
          </div>
        </div>
      </section>
    </>
  );
}
