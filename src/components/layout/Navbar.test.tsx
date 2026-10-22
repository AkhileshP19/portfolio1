import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import Navbar from "./Navbar";
vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
vi.mock("next-themes", () => ({ useTheme: () => ({ setTheme: vi.fn() }) }));
it("dismisses the mobile menu with Escape and returns focus to its toggle", () => {
  render(<Navbar hasResume={false} />);
  const toggle = screen.getByRole("button", { name: "Open navigation" });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(screen.getByRole("navigation"), { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  expect(
    screen.queryByRole("link", { name: /Resume/ }),
  ).not.toBeInTheDocument();
});
it("closes after choosing a destination and exposes an available resume", () => {
  render(<Navbar hasResume />);
  const toggle = screen.getByRole("button", { name: "Open navigation" });
  fireEvent.click(toggle);
  fireEvent.click(screen.getByRole("link", { name: "Work" }));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(screen.getByRole("link", { name: /Resume/ })).toHaveAttribute(
    "href",
    "/Akhilesh-Patil-Resume.pdf",
  );
});
