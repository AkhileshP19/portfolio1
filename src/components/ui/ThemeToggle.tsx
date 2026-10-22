"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AtmosphereControl, resetDaylight } from "./Atmosphere";
export default function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="theme-control">
      <Button
        variant="ghost"
        className="icon-button light-choice"
        onClick={() => {
          resetDaylight();
          setTheme("light");
        }}
        aria-label="Use light theme"
        title="Light theme"
      >
        <Sun size={19} aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        className="icon-button dark-choice"
        onClick={() => {
          resetDaylight();
          setTheme("dark");
        }}
        aria-label="Use dark theme"
        title="Dark theme"
      >
        <Moon size={18} aria-hidden="true" />
      </Button>
      <AtmosphereControl />
    </div>
  );
}
