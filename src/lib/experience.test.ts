import { describe, expect, it } from "vitest";
import { formatExperience, getExperienceDuration } from "./experience";
describe("calendar-month professional experience", () => {
  it.each([
    ["2025-01-01T00:00:00Z", "0 mos"],
    ["2025-02-01T00:00:00Z", "0 mos"],
    ["2025-03-01T00:00:00Z", "1 mo"],
    ["2026-02-01T00:00:00Z", "1 yr"],
    ["2026-10-22T00:00:00Z", "1 yr 8 mos"],
    ["2027-02-01T00:00:00Z", "2 yrs"],
    ["2028-02-29T00:00:00Z", "3 yrs"],
  ])("formats %s as %s", (date, expected) =>
    expect(formatExperience(new Date(date))).toBe(expected),
  );
  it("rolls over at the beginning of an India calendar month", () => {
    expect(
      getExperienceDuration(new Date("2026-10-31T18:29:59Z")).totalMonths,
    ).toBe(20);
    expect(
      getExperienceDuration(new Date("2026-10-31T18:30:00Z")).totalMonths,
    ).toBe(21);
  });
  it("rejects invalid dates", () =>
    expect(() => getExperienceDuration(new Date("invalid"))).toThrow(
      RangeError,
    ));
});
