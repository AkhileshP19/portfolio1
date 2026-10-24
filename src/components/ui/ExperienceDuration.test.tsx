import { act, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import ExperienceDuration from "./ExperienceDuration";
afterEach(() => vi.useRealTimers());
it("updates a mounted label across a calendar-month boundary", () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-10-31T18:29:30Z"));
  render(<ExperienceDuration />);
  expect(screen.getByText("1 yr 8 mos")).toBeInTheDocument();
  act(() => vi.advanceTimersByTime(60_000));
  expect(screen.getByText("1 yr 9 mos")).toBeInTheDocument();
});
