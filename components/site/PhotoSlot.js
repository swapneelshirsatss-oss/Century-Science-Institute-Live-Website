import Image from "next/image";

/* "Mrs. Meghana Marchatwar" -> "MM": honorifics are skipped. */
const initials = (name = "") =>
  name
    .split(/\s+/)
    .filter((w) => w && !/^(mr|mrs|ms|dr|prof)\.?$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

/**
 * Shows a real photo when `src` is set; otherwise a quiet monogram of the person's initials,
 * so a missing photo reads as intentional instead of a "Photo, 1:1" developer placeholder.
 * `label` is kept as a data attribute so it is still clear which picture is missing.
 */
export default function PhotoSlot({ src, alt = "", label, note, sizes = "(max-width: 860px) 100vw, 50vw", priority = false, className = "" }) {
  return (
    <div className={`x-slot ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      ) : (
        <span className="x-slot-empty" role="img" aria-label={alt || label} data-missing={label}>
          <b aria-hidden="true">{initials(note || alt)}</b>
        </span>
      )}
    </div>
  );
}
