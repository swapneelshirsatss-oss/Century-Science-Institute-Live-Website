import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items }) {
  // items: [{ label: "Home", href: "/" }, { label: "JEE Coaching", href: "/jee-coaching/" }]
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://centuryscienceinstitute.in${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-200/60 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div key={item.href} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Link href="/" className="hover:text-blue-700 flex items-center gap-1 font-medium">
                    <Home className="w-3.5 h-3.5 text-slate-400" />
                    <span>Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="font-semibold text-slate-800" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-700 font-medium">
                    {item.label}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
