import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";
import ContactForm from "./ContactForm";
const { send } = vi.hoisted(() => ({ send: vi.fn() }));
vi.mock("@emailjs/browser", () => ({ default: { send } }));
beforeEach(() => {
  send.mockReset();
});
function fill() {
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Test Person" },
  });
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Your message"), {
    target: { value: '<script>alert("hello")</script> This stays plain text.' },
  });
}
it("validates before sending", async () => {
  render(<ContactForm />);
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  expect(
    await screen.findByText("Please enter at least 2 characters."),
  ).toBeInTheDocument();
  expect(send).not.toHaveBeenCalled();
});
it("sends structured parameters and confirms success", async () => {
  send.mockResolvedValue({ status: 200 });
  render(<ContactForm />);
  fill();
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  await waitFor(() => expect(send).toHaveBeenCalled());
  expect(send.mock.calls[0][2]).toEqual({
    from_name: "Test Person",
    reply_to: "test@example.com",
    message: '<script>alert("hello")</script> This stays plain text.',
  });
  expect(
    await screen.findByText("Message sent. Thanks for getting in touch!"),
  ).toBeInTheDocument();
});
it("retains the message and provides a direct email fallback on failure", async () => {
  send.mockRejectedValue(new Error("Network error"));
  render(<ContactForm />);
  fill();
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  expect(
    await screen.findByText(/Your message could not be sent/),
  ).toBeInTheDocument();
  expect(screen.getByLabelText("Your name")).toHaveValue("Test Person");
});
