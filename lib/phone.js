/**
 * Indian mobile numbers as people actually type them: "98220 12345", "+91 98220-12345",
 * "09822012345", "919822012345". Returns the 10-digit number, or "" if it isn't a valid mobile.
 * Used by both forms and by the enquiry API, so the browser and server agree.
 */
export function normalizeMobile(input) {
  let d = String(input ?? "").replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  else if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? d : "";
}

export const PHONE_ERROR = "Enter a 10-digit mobile number, for example 98220 12345.";
