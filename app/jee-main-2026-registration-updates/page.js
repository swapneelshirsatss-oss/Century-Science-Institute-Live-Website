import Image from "next/image";
import DocPage from "@/components/site/DocPage";
import DemoButton from "@/components/site/DemoButton";
import { photos } from "@/data/photos";
export const metadata = {
  title: "JEE Main Registration Updates & Strategy Guide – CSI Nagpur",
  description: "Get essential updates on JEE Main registration dates, high-weightage chapters in Physics, Chemistry, Math, and expert tips from Century Science Institute.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-main-2026-registration-updates/"
  }
};

export default function JeeBlogPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "JEE Main Registration Updates", href: "/jee-main-2026-registration-updates/" }]}
      pill="Engineering Exam Strategy"
      title="JEE Main Registration Updates & High-Yield Preparation Strategy"
      tabs={false}
      headExtra={<p className="gh-lead x-post-meta" style={{ marginTop: 8 }}><span>Updated: November 11, 2025</span> · <span>By IIT/NIT Faculty Advisory, CSI Nagpur</span></p>}
      sections={[
        {
          id: "article",
          label: "Article",
          body: (
            <div className="x-article">
              <figure><div className="x-slot"><Image src={photos.blogJee} alt="JEE Main Strategy Guide CSI Nagpur" fill sizes="(max-width: 960px) 100vw, 800px" /></div></figure>
              <p>Preparing for JEE Main requires a balanced combination of rigorous mathematical problem solving, conceptual clarity in Physics, and thorough precision in Chemistry. As the National Testing Agency (NTA) continues to emphasize application-based analytical questions, aspirants must adopt an agile revision roadmap.</p>
              <h2>1. Key Subject-Wise Priority Areas</h2>
              <ul>
                <li><strong>Physics:</strong> Modern Physics, Semiconductors, Current Electricity, Kinematics, and Thermodynamics carry consistent high-yield question weightage.</li>
                <li><strong>Chemistry:</strong> Coordination Compounds, Chemical Bonding, GOC (General Organic Chemistry), and Physical Chemistry stoichiometry require daily numerical drills.</li>
                <li><strong>Mathematics:</strong> Vector & 3D Geometry, Matrices & Determinants, Coordinate Geometry, and Differential Calculus are indispensable high-scoring sections.</li>
              </ul>
              <h2>2. How the Double Teaching Concept Prevents Board Anxiety</h2>
              <p>Many students struggle to maintain 75% in their 12th board examinations while chasing JEE cutoffs. At Century Science Institute, our <strong>Double Teaching Concept</strong> ensures 1 hour of descriptive derivation practice every single day, keeping board mastery synchronized with competitive problem solving.</p>
            </div>
          ),
        },
        {
          id: "next",
          label: "Next step",
          body: (
            <>
              <h3>Need Guidance from IIT/NIT Mentors?</h3>
              <p>Schedule a diagnostic meeting at our Hudkeshwar Road campus in Nagpur.</p>
              <DemoButton className="x-btn x-btn-gold x-btn-sm">Book a free demo class</DemoButton>
            </>
          ),
        },
      ]}
    />
  );
}
