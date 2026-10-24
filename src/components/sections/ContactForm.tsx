"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, LoaderCircle, CheckCircle2, CircleAlert } from "lucide-react";
import { profile } from "@/data/portfolio";

const schema = z.object({
  from_name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Please keep your name under 80 characters."),
  reply_to: z.email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(3000, "Please keep your message under 3,000 characters."),
  website: z.string(),
});
type Fields = z.infer<typeof schema>;
export default function ContactForm() {
  const [result, setResult] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Fields>({
    resolver: zodResolver(schema),
    defaultValues: { website: "" },
    mode: "onBlur",
  });
  async function submit(data: Fields) {
    setResult(null);
    if (data.website) return;
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      // EmailJS browser IDs are public identifiers, not private API credentials.
      // Keep the existing working integration; override in Vercel if IDs change.
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_zo9mpnu",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_n1rs50o",
        {
          from_name: data.from_name,
          reply_to: data.reply_to,
          message: data.message,
        },
        {
          publicKey:
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "2gFHWbCBQ_FSKhhsW",
          limitRate: { id: "portfolio-contact", throttle: 30_000 },
        },
      );
      setResult({
        kind: "success",
        text: "Message sent. Thanks for getting in touch!",
      });
      reset();
    } catch {
      setResult({
        kind: "error",
        text: `Your message could not be sent. Please try again or email ${profile.email} directly.`,
      });
    }
  }
  return (
    <div className="contact-form-layout">
      <div>
        <p className="eyebrow">Start a conversation</p>
        <h3>Have something in mind?</h3>
        <p>
          Send a note about a role, a product, or a problem you’re working on.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        noValidate
        aria-label="Send a message"
      >
        <div className="form-fields">
          <div>
            <Label htmlFor="from-name">Your name</Label>
            <Input
              id="from-name"
              autoComplete="name"
              {...register("from_name")}
              aria-invalid={!!errors.from_name}
              aria-describedby={errors.from_name ? "name-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.from_name && (
              <p className="field-error" id="name-error">
                {errors.from_name.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="reply-to">Email address</Label>
            <Input
              id="reply-to"
              type="email"
              autoComplete="email"
              {...register("reply_to")}
              aria-invalid={!!errors.reply_to}
              aria-describedby={errors.reply_to ? "email-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.reply_to && (
              <p className="field-error" id="email-error">
                {errors.reply_to.message}
              </p>
            )}
          </div>
        </div>
        <div className="message-field">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            rows={5}
            {...register("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="field-error" id="message-error">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="honeypot" aria-hidden="true">
          <Label htmlFor="website">Leave this empty</Label>
          <Input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <div className="form-submit">
          <Button className="button" disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <LoaderCircle className="spin" size={17} aria-hidden="true" />
            ) : (
              <Send size={17} aria-hidden="true" />
            )}
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>
          <p>Delivered directly to my inbox.</p>
        </div>
        <div className={`form-result ${result?.kind ?? ""}`} role="status">
          {result && (
            <>
              {result.kind === "success" ? (
                <CheckCircle2 size={18} aria-hidden="true" />
              ) : (
                <CircleAlert size={18} aria-hidden="true" />
              )}
              <p>{result.text}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
