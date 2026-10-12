import Image from "next/image";

/**
 * Shows a real photo when `src` is set; otherwise a labelled empty slot so it is obvious
 * which picture is still missing. Square corners and object-fit cover.
 */
export default function PhotoSlot({ src, alt = "", label, note, sizes = "(max-width: 860px) 100vw, 50vw", priority = false, className = "" }) {
  return (
    <div className={`x-slot ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      ) : (
        <span className="x-slot-empty" role="img" aria-label={alt || label}>
          <span>
            <b>{label}</b>
            {note}
          </span>
        </span>
      )}
    </div>
  );
}
