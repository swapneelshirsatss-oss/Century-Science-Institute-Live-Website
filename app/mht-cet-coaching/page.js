import CoursePage from "@/components/site/CoursePage";
import { courseData } from "@/data/courses";

/* Metadata unchanged from the previous page (SEO continuity). */
export const metadata = {
  title: "MHT-CET Coaching in Nagpur – Century Science Institute",
  description: "Century Science Institute offers the most trusted MHT-CET Coaching in Nagpur. Experienced mentors, focused batches, and success-driven strategies.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-coaching/"
  },
  openGraph: {
    title: "MHT-CET Coaching in Nagpur – Century Science Institute",
    description: "Century Science Institute offers the most trusted MHT-CET Coaching in Nagpur.",
    url: "https://centuryscienceinstitute.in/mht-cet-coaching/"
  }
};

export default function MhtCetCoachingPage() {
  return <CoursePage c={courseData.cet} />;
}
