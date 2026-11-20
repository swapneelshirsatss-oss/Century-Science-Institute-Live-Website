import CoursePage from "@/components/site/CoursePage";
import { courseData } from "@/data/courses";
import { DEFAULT_OG_IMAGE } from "@/lib/schema";

/* Metadata unchanged from the previous page (SEO continuity). */
export const metadata = {
  title: "Best JEE Coaching in Nagpur – Century Science Institute",
  description: "Looking for the best JEE Coaching in Nagpur? CSI offers faculty with 15+ years of experience, Double Teaching, study material and mock tests for JEE Main & Advanced.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-coaching/"
  },
  openGraph: {
    title: "Best JEE Coaching in Nagpur – Century Science Institute",
    description: "Looking for the best JEE Coaching in Nagpur? CSI offers faculty with 15+ years of experience, Double Teaching, study material and mock tests for JEE Main & Advanced.",
    url: "https://centuryscienceinstitute.in/jee-coaching/",
    images: [DEFAULT_OG_IMAGE],
  }
};

export default function JeeCoachingPage() {
  return <CoursePage c={courseData.jee} />;
}
