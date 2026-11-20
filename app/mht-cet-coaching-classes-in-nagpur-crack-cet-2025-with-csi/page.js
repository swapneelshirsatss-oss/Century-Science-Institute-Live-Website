import Link from "next/link";
import Image from "next/image";
import DocPage from "@/components/site/DocPage";
import DemoButton from "@/components/site/DemoButton";
import { photos } from "@/data/photos";
import { buildArticleSchema } from "@/lib/schema";

export const metadata = {
  title: "MHT-CET Coaching Classes in Nagpur: Crack CET with CSI",
  description: "Learn how the Double Teaching Concept and regular full-length mocks help Nagpur students aim for a top MHT-CET percentile with Century Science Institute.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/"
  },
  openGraph: {
    type: "article",
    title: "MHT-CET Coaching Classes in Nagpur: Crack CET with CSI",
    description: "State Board textbook mastery, shortcut formula drills and computer-based mock tests for MHT-CET PCM & PCB at Century Science Institute Nagpur.",
    url: "https://centuryscienceinstitute.in/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/",
    publishedTime: "2025-09-28T00:00:00+05:30",
    modifiedTime: "2026-11-20T00:00:00+05:30",
    images: [{ url: "/photos/blog-mht-cet-2025.jpg", alt: "MHT-CET Coaching Classes in Nagpur – Century Science Institute" }],
  }
};

const articleSchema = buildArticleSchema({
  headline: "MHT-CET Coaching Classes in Nagpur: Crack CET with Century Science Institute",
  description: "Learn how the Double Teaching Concept and regular full-length mocks help Nagpur students aim for a top MHT-CET percentile with Century Science Institute.",
  path: "/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/",
  datePublished: "2025-09-28T00:00:00+05:30",
  dateModified: "2026-11-20T00:00:00+05:30",
  authorName: "CSI Academic Advisory Team",
  image: photos.blogCet,
});

export default function CetBlogPage() {
  return (
    <DocPage
      schema={articleSchema}
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
              <p>At Century Science Institute, our <Link className="gh-inline" href="/topper-jee-neet-cet-12th-sci/">verified MHT-CET toppers</Link>, like Tejas Dhande (99.23 percentile in MHT-CET), prepared through our structured <Link className="gh-inline" href="/mht-cet-test-series/">MHT-CET computer-based test series</Link>, <Link className="gh-inline" href="/mht-cet-crash-course/">intensive crash course</Link>, and daily doubt-solving sessions.</p>
            </div>
          ),
        },
        {
          id: "next",
          label: "Next step",
          body: (
            <>
              <h3>Admissions Open for MHT-CET Batches</h3>
              <p>Separate PCM and PCB batches with limited capacity. Explore our full <Link className="gh-inline" href="/mht-cet-coaching/">MHT-CET coaching in Nagpur</Link>.</p>
              <DemoButton className="x-btn x-btn-gold x-btn-sm">Book free counselling</DemoButton>
            </>
          ),
        },
      ]}
    />
  );
}
