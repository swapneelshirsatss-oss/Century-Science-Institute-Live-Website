/* The admission form page is a client component, so its metadata lives here.
   Without this it inherited the homepage canonical. Title kept from the live page. */
export const metadata = {
  title: "Admission Form - Century Science Institute",
  description:
    "Apply for JEE, NEET, MHT-CET or test series admission at Century Science Institute, Hudkeshwar Road, Nagpur. Fill in the form and our counsellor will call you.",
  alternates: { canonical: "/admission-form/" },
  openGraph: { title: "Admission Form - Century Science Institute", url: "/admission-form/" },
};

export default function AdmissionFormLayout({ children }) {
  return children;
}
