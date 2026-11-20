import Image from "next/image";
import DocPage from "@/components/site/DocPage";
import DemoButton from "@/components/site/DemoButton";
import { photos } from "@/data/photos";
export const metadata = {
  title: "MHT-CET Coaching Classes in Nagpur: Crack CET with CSI",
  description: "Learn how the Double Teaching Concept and regular full-length mocks help Nagpur students aim for a top MHT-CET percentile with Century Science Institute.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/"
  }
};

export default function CetBlogPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Crack MHT-CET with CSI", href: "/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/" }]}
      pill="State Entrance Strategy"
      title="MHT-CET Coaching Classes in Nagpur: Crack CET with Century Science Institute"
      tabs={false}
      headExtra={<p className="gh-lead x-post-meta" style={{ marginTop: 8 }}><span>Published: September 28, 2025</span> · <span>By CSI Academic Advisory Team</span></p>}
      sections={[
        {
          id: "article",
          label: "Article",
          body: (
            <div className="x-article">
              <figure><div className="x-slot"><Image src={photos.blogCet} alt="MHT-CET Coaching Classes in Nagpur CSI" fill sizes="(max-width: 960px) 100vw, 800px" /></div></figure>
              <p>MHT-CET serves as the gateway to Maharashtra’s premier state engineering and pharmacy colleges, including COEP Technological University, VJTI Mumbai, and ICT Mumbai. While based on the State Board curriculum, the examination tests intense calculation speed and rapid question discrimination.</p>
              <h2>Proven Path to the 99+ Percentile Club</h2>
              <p>Students who score in the top 1 percentile of MHT-CET follow a strict 3-tier preparation model:</p>
              <ul>
                <li><strong>Mastering State Board Textbooks:</strong> Unlike JEE which references NCERT, CET questions directly quote State Board lines and definitions.</li>
                <li><strong>Shortcut Formula Drills:</strong> With 150 questions to solve in 180 minutes, questions must be answered in under 70 seconds.</li>
                <li><strong>Exam Simulation:</strong> Regular full-length mocks under real exam timing.</li>
              </ul>
              <p>At Century Science Institute, our toppers, like Tejas Dhande (99.23 percentile in MHT-CET), prepared through our structured test series and doubt-solving sessions.</p>
            </div>
          ),
        },
        {
          id: "next",
          label: "Next step",
          body: (
            <>
              <h3>Admissions Open for MHT-CET Batches</h3>
              <p>Separate PCM and PCB batches with limited capacity.</p>
              <DemoButton className="x-btn x-btn-gold x-btn-sm">Book free counselling</DemoButton>
            </>
          ),
        },
      ]}
    />
  );
}
