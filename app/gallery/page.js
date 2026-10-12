import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Campus Gallery – Century Science Institute Nagpur",
  description: "View photos from Century Science Institute Nagpur. Annual events, student felicitations, parent-teacher meetings, and campus classrooms.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/gallery/"
  }
};

const galleryImages = [
  {
    title: "Annual Student Felicitation",
    desc: "Celebrating NEET & JEE Top Scorers with awards and trophies.",
    src: "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Felicitation-300x200.webp"
  },
  {
    title: "Parent-Teacher Interactive Meeting",
    desc: "Regular quarterly meetings reviewing micro-level performance metrics.",
    src: "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Parents-Meeting-300x135.webp"
  },
  {
    title: "Annual Academic Event",
    desc: "Motivational workshops and orientation seminars for new batches.",
    src: "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Annula-Event-300x200.webp"
  },
  {
    title: "JEE Mains & Adv. Mentorship Batch",
    desc: "Interactive numerical practice in air-conditioned amphitheater classrooms.",
    src: "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/CSI-JEE-300x200.webp"
  },
  {
    title: "Student Freshers Orientation",
    desc: "Welcoming 11th Science and Integrated batch students.",
    src: "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Freshers-Party-300x135.webp"
  },
  {
    title: "Self-Owned Academic Building",
    desc: "Dedicated institutional building on Hudkeshwar Road Nagpur.",
    src: "https://centuryscienceinstitute.in/wp-content/uploads/2025/07/Exterior-Building.jpg"
  }
];

export default function GalleryPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Campus Gallery", href: "/gallery/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Camera className="w-3.5 h-3.5" />
            <span>Campus Moments</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Century Science Institute Campus Life & Events
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Glimpses of life at CSI Nagpur: student felicitations, parent-teacher reviews, classroom sessions, and campus facilities.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden bg-slate-200 relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-extrabold text-base text-slate-900">{img.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/admission-form/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#16303F] hover:bg-blue-900 text-amber-400 font-bold text-sm transition shadow-md"
            >
              <span>Visit Campus in Person & Schedule Free Counselling →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
