import CoursePage from "@/components/site/CoursePage";
import { courseData } from "@/data/courses";

/* Metadata unchanged from the previous page (SEO continuity). */
export const metadata = {
  title: "Best NEET Coaching in Nagpur – Century Science Institute",
  description: "Join CSI Nagpur for expert NEET coaching in Nagpur with daily tests, Double teaching, and experienced faculty. Build confidence for medical entrance success.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/neet-coaching/"
  },
  openGraph: {
    title: "Best NEET Coaching in Nagpur – Century Science Institute",
    description: "Join CSI Nagpur for expert NEET coaching in Nagpur with daily tests, Double teaching, and experienced faculty.",
    url: "https://centuryscienceinstitute.in/neet-coaching/"
  }
};

export default function NeetCoachingPage() {
  return <CoursePage c={courseData.neet} />;
}
