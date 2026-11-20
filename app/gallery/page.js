import Image from "next/image";
import PageHero from "@/components/site/PageHero";
import DemoButton from "@/components/site/DemoButton";
import { photos } from "@/data/photos";
import { JsonLd, SITE } from "@/lib/schema";

export const metadata = {
  title: "Campus Gallery – Century Science Institute Nagpur",
  description: "View photos from Century Science Institute Nagpur. Annual events, student felicitations, parent-teacher meetings, and campus classrooms.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/gallery/"
  },
  openGraph: {
    title: "Campus Gallery – Century Science Institute Nagpur",
    description: "Explore photos of classroom sessions, annual student felicitations, parent-teacher meetings and campus life at Century Science Institute Nagpur.",
    url: "https://centuryscienceinstitute.in/gallery/",
    images: [{ url: "/photos/felicitation.jpg", alt: "Annual Student Felicitation at Century Science Institute Nagpur" }],
  }
};

const galleryImages = [
  { title: "Classroom Test in Progress", desc: "Students writing a weekly test in the main classroom.", src: photos.classroom },
  { title: "Annual Student Felicitation", desc: "Celebrating NEET & JEE Top Scorers with awards and trophies.", src: photos.felicitation },
  { title: "JEE Mains & Adv. Mentorship Batch", desc: "JEE students on stage at the CSI felicitation.", src: photos.csiJee },
  { title: "Felicitation Ceremony Stage", desc: "The Abhinandan Sohala stage set for the toppers' felicitation.", src: photos.felicitationStage },
  { title: "Toppers at the Felicitation", desc: "Students with their Abhinandan awards.", src: photos.felicitationGroup },
  { title: "Annual Academic Event", desc: "Motivational workshops and orientation seminars for new batches.", src: photos.annualEvent },
  { title: "Cultural Performance", desc: "A student dance performance at the annual event.", src: photos.culturalPerformance },
  { title: "Student Freshers Orientation", desc: "Welcoming 11th Science and Integrated batch students.", src: photos.freshers },
  { title: "Parent-Teacher Interactive Meeting", desc: "Parents meeting teachers to review student progress.", src: photos.parentsMeeting },
  { title: "Batch in Class", desc: "Students in CSI T-shirts during a class session.", src: photos.classTest },
  { title: "CSI Study Material", desc: "The institute's own Physics, Chemistry, Biology and Maths books.", src: photos.studyMaterial },
  { title: "Self-Owned Academic Building", desc: "Dedicated institutional building on Hudkeshwar Road Nagpur.", src: photos.building },
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE}/gallery/#gallery`,
  url: `${SITE}/gallery/`,
  name: "Century Science Institute Campus Life & Events Gallery",
  description: "Photos from Century Science Institute Nagpur: classroom sessions, student felicitations, parent-teacher meetings and campus building.",
  isPartOf: { "@id": `${SITE}/#website` },
  image: galleryImages.map((img) => ({
    "@type": "ImageObject",
    name: img.title,
    caption: img.desc,
    contentUrl: `${SITE}${img.src}`,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={gallerySchema} />
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
            <DemoButton>Book free counselling</DemoButton>
          </div>
        </div>
      </section>
    </>
  );
}
