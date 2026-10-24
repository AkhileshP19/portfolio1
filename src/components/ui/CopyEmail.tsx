"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Copy } from "lucide-react";
export default function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("Email copied.");
    } catch {
      setStatus("Could not copy. Please select the email address.");
    }
  }
  return (
    <div className="copy-control">
      <Button variant="ghost" className="min-h-11" onClick={copy}>
        <Copy size={15} aria-hidden="true" /> Copy email
      </Button>
      <span role="status">{status}</span>
    </div>
  );
}
