import Link from "next/link";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

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
    image: "https://centuryscienceinstitute.in/wp-content/uploads/2025/09/2f496abb-550e-4955-a5ae-ceae5b14abf8.png"
  },
  {
    title: "JEE Main Registration Updates & High-Yield Strategy Guide",
    slug: "jee-main-2026-registration-updates",
    date: "November 11, 2025",
    author: "IIT/NIT Faculty Panel",
    excerpt: "Essential checklist for JEE Main session registration, high-weightage chapter analysis in Physics, Chemistry, and Mathematics, and mistake prevention.",
    image: "https://centuryscienceinstitute.in/wp-content/uploads/2025/11/Get-More-Information-about-IIT-JEE-Strategy-Guide-1024x536.png"
  }
];

export default function BlogHubPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" }
      ]} />

      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Insights & Strategy</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Century Science Institute Articles & Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Exam preparation blueprints, syllabus breakdowns, and tips written by subject mentors in Nagpur.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-slate-200 relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <span>{art.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        <span>{art.author}</span>
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 hover:text-blue-700 transition">
                      <Link href={`/${art.slug}/`}>
                        {art.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2">
                  <Link
                    href={`/${art.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
