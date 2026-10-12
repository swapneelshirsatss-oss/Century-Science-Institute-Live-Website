"use client";

import { useCallback, useEffect, useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import MobileDock from "@/components/site/MobileDock";
import EnquiryModal from "@/components/site/EnquiryModal";
import MotionLayer from "@/components/site/MotionLayer";

export default function ClientLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = useCallback(() => setModalOpen(false), []);

  // Any "Book a free demo" button on any page opens the same enquiry form.
  useEffect(() => {
    window.addEventListener("csi:open-demo", open);
    return () => window.removeEventListener("csi:open-demo", open);
  }, []);

  return (
    <>
      <SiteHeader onOpenAdmission={open} />
      <main id="main">{children}</main>
      <SiteFooter />
      <MobileDock onOpenAdmission={open} />
      <EnquiryModal isOpen={modalOpen} onClose={close} />
      <MotionLayer />
    </>
  );
}
