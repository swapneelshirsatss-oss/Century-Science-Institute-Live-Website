import Link from "next/link";
import Image from "next/image";
import DocPage from "@/components/site/DocPage";
import { photos } from "@/data/photos";
export const metadata = {
  title: "Blog & Educational Guides – Century Science Institute Nagpur",
  description: "Stay updated with JEE Main registration guides, MHT-CET preparation strategies, and NEET scoring tips from Century Science Institute Nagpur.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/blog/"
  }
};

const articles = [
  {
    title: "MHT-CET Coaching Classes in Nagpur: Crack CET with CSI",
    slug: "mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi",
    date: "September 28, 2025",
    author: "Academic Advisory Team",
    excerpt: "Learn how the Double Teaching Concept and 50+ computer-based mock tests enable Nagpur students to score 99+ percentile in MHT-CET.",
    image: photos.blogCet
  },
  {
    title: "JEE Main Registration Updates & High-Yield Strategy Guide",
    slug: "jee-main-2026-registration-updates",
    date: "November 11, 2025",
    author: "IIT/NIT Faculty Panel",
    excerpt: "Essential checklist for JEE Main session registration, high-weightage chapter analysis in Physics, Chemistry, and Mathematics, and mistake prevention.",
    image: photos.blogJee
  }
];

export default function BlogHubPage() {
  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }]}
      pill="Academic Insights & Strategy"
      title="Century Science Institute Articles & Guides"
      lead="Exam preparation blueprints, syllabus breakdowns, and tips written by subject mentors in Nagpur."
      tabs={false}
      sections={[
        {
          id: "articles",
          label: "Articles",
          count: articles.length,
          raw: true,
          body: (
            <ul className="x-posts">
              {articles.map((art) => (
                <li key={art.slug}>
                  <article>
                    <div className="x-slot"><Image src={art.image} alt={art.title} fill sizes="(max-width: 860px) 100vw, 240px" /></div>
                    <div>
                      <p className="x-post-meta"><span>{art.date}</span> · <span>{art.author}</span></p>
                      <h2><Link href={`/${art.slug}/`}>{art.title}</Link></h2>
                      <p>{art.excerpt}</p>
                      <Link className="gh-inline" href={`/${art.slug}/`}>Read Full Guide</Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ),
        },
      ]}
    />
  );
}
