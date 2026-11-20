"use client";

/** Opens the site-wide enquiry form (listened for in ClientLayout). */
export default function DemoButton({ children = "Book free counselling", className = "x-btn x-btn-gold" }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("csi:open-demo"))}>
      {children}
    </button>
  );
}
