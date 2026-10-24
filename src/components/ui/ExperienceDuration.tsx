"use client";
import { useSyncExternalStore } from "react";
import { formatExperience } from "@/lib/experience";

function subscribe(callback: () => void) {
  const timer = window.setInterval(callback, 60_000);
  window.addEventListener("focus", callback);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener("focus", callback);
  };
}
export default function ExperienceDuration() {
  const duration = useSyncExternalStore(
    subscribe,
    () => formatExperience(),
    () => "Since Feb 2025",
  );
  return <span className="duration">{duration}</span>;
}
