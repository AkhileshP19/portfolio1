// Month-level precision: the joining day was not supplied. Use India calendar months.
export const CAREER_START = { year: 2025, month: 2 } as const;

export function getExperienceDuration(now = new Date()) {
  if (Number.isNaN(now.getTime()))
    throw new RangeError("A valid date is required");
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
  }).formatToParts(now);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const totalMonths = Math.max(
    0,
    (year - CAREER_START.year) * 12 + month - CAREER_START.month,
  );
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    totalMonths,
  };
}

export function formatExperience(now = new Date()) {
  const { years, months } = getExperienceDuration(now);
  return [
    years ? `${years} ${years === 1 ? "yr" : "yrs"}` : "",
    months || !years ? `${months} ${months === 1 ? "mo" : "mos"}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}
