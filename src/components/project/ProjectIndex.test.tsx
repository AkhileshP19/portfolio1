import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import ProjectIndex from "./ProjectIndex";
import Link from "next/link";
it("switches previews on keyboard focus as well as pointer entry", () => {
  const { container } = render(
    <ProjectIndex
      rows={[
        <Link key="a" href="/work/a">
          First case
        </Link>,
        <Link key="b" href="/work/b">
          Second case
        </Link>,
      ]}
      previews={[<p key="a">First flow</p>, <p key="b">Second flow</p>]}
    />,
  );
  expect(container.querySelector(".preview-layer.visible")).toHaveTextContent(
    "First flow",
  );
  fireEvent.focus(screen.getByRole("link", { name: "Second case" }));
  expect(container.querySelector(".preview-layer.visible")).toHaveTextContent(
    "Second flow",
  );
  fireEvent.mouseEnter(container.querySelectorAll(".project-entry")[0]);
  expect(container.querySelector(".preview-layer.visible")).toHaveTextContent(
    "First flow",
  );
});
