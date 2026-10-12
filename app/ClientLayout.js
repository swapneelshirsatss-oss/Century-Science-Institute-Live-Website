"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import AdmissionModal from "@/components/AdmissionModal";

export default function ClientLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenAdmission={() => setModalOpen(true)} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <StickyCTA onOpenAdmission={() => setModalOpen(true)} />
      <AdmissionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
