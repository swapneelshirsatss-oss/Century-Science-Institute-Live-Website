import CoursePage from "@/components/site/CoursePage";
import { courseData } from "@/data/courses";

/* Metadata unchanged from the previous page (SEO continuity). */
export const metadata = {
  title: "Best JEE Coaching in Nagpur – Century Science Institute",
  description: "Looking for the best JEE Coaching in Nagpur? CSI offers IIT/NIT faculty, study material, mock tests & proven results for JEE Main & Advanced.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-coaching/"
  },
  openGraph: {
    title: "Best JEE Coaching in Nagpur – Century Science Institute",
    description: "Looking for the best JEE Coaching in Nagpur? CSI offers IIT/NIT faculty, study material, mock tests & proven results for JEE Main & Advanced.",
    url: "https://centuryscienceinstitute.in/jee-coaching/",
  }
};

export default function JeeCoachingPage() {
  return <CoursePage c={courseData.jee} />;
}
