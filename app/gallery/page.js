import Image from "next/image";
import PageHero from "@/components/site/PageHero";
import DemoButton from "@/components/site/DemoButton";
import { photos } from "@/data/photos";
export const metadata = {
  title: "Campus Gallery – Century Science Institute Nagpur",
  description: "View photos from Century Science Institute Nagpur. Annual events, student felicitations, parent-teacher meetings, and campus classrooms.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/gallery/"
  }
};

const galleryImages = [
  { title: "Annual Student Felicitation", desc: "Celebrating NEET & JEE Top Scorers with awards and trophies.", src: photos.felicitation },
  { title: "Parent-Teacher Interactive Meeting", desc: "Regular quarterly meetings reviewing micro-level performance metrics.", src: photos.parentsMeeting },
  { title: "Annual Academic Event", desc: "Motivational workshops and orientation seminars for new batches.", src: photos.annualEvent },
  { title: "JEE Mains & Adv. Mentorship Batch", desc: "Interactive numerical practice in air-conditioned amphitheater classrooms.", src: photos.csiJee },
  { title: "Student Freshers Orientation", desc: "Welcoming 11th Science and Integrated batch students.", src: photos.freshers },
  { title: "Self-Owned Academic Building", desc: "Dedicated institutional building on Hudkeshwar Road Nagpur.", src: photos.building },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Campus Gallery", href: "/gallery/" }]}
        eyebrow="Campus Moments"
        size="md"
        title="Century Science Institute Campus Life & Events"
        lead="Glimpses of life at CSI Nagpur: student felicitations, parent-teacher reviews, classroom sessions, and campus facilities."
      />
      <section className="x-sec" aria-label="Photos">
        <div className="x-wrap">
          <div className="x-gallery">
            {galleryImages.map((img) => (
              <figure key={img.title}>
                <div className="x-slot"><Image src={img.src} alt={img.title} fill sizes="(max-width: 860px) 100vw, 33vw" /></div>
                <figcaption>
                  <h2>{img.title}</h2>
                  <p>{img.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="x-ctas" style={{ marginTop: 44 }}>
            <DemoButton>Book a free demo class</DemoButton>
          </div>
        </div>
      </section>
    </>
  );
}
