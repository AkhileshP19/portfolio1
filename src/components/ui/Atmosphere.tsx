"use client";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { CloudSun, CloudRain, Snowflake, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Settings = {
  weather: "none" | "summer" | "snow" | "rain";
  intensity: number;
  daylight: "manual" | "morning" | "afternoon" | "evening" | "night";
};
const defaults: Settings = {
  weather: "none",
  intensity: 35,
  daylight: "manual",
};
const fallback = JSON.stringify(defaults);
const key = "portfolio-atmosphere";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("atmosphere", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("atmosphere", callback);
  };
}
function snapshot() {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}
function parse(value: string): Settings {
  try {
    const data = JSON.parse(value);
    return {
      weather: ["none", "summer", "snow", "rain"].includes(data.weather)
        ? data.weather
        : "none",
      intensity:
        typeof data.intensity === "number"
          ? Math.max(0, Math.min(100, data.intensity))
          : 35,
      daylight: ["manual", "morning", "afternoon", "evening", "night"].includes(
        data.daylight,
      )
        ? data.daylight
        : "manual",
    };
  } catch {
    return defaults;
  }
}
function save(settings: Settings) {
  try {
    localStorage.setItem(key, JSON.stringify(settings));
  } catch {
    /* Storage may be disabled; the default remains usable. */
  }
  window.dispatchEvent(new Event("atmosphere"));
}
export function resetDaylight() {
  save({ ...parse(snapshot()), daylight: "manual" });
}
export function useAtmosphereSettings() {
  return parse(useSyncExternalStore(subscribe, snapshot, () => fallback));
}

const daylightOptions = [
  { value: "manual", label: "Use my light / dark setting" },
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
  { value: "night", label: "Night" },
] as const;

export function AtmosphereControl() {
  const settings = useAtmosphereSettings();
  const { setTheme } = useTheme();
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="ghost" size="icon" className="icon-button" />}
        aria-label="Atmosphere settings"
        title="Atmosphere settings"
      >
        <CloudSun size={19} aria-hidden="true" />
      </DialogTrigger>
      <DialogContent
        className="atmosphere-dialog"
        showCloseButton={false}
        onKeyDown={(event) => event.stopPropagation()}
        onBlur={(event) => event.stopPropagation()}
      >
        <div className="dialog-content">
          <DialogHeader className="dialog-heading">
            <div>
              <p className="eyebrow">Make yourself at home</p>
              <DialogTitle>A little atmosphere.</DialogTitle>
            </div>
            <DialogClose
              render={
                <Button variant="ghost" size="icon" className="icon-button" />
              }
              aria-label="Close atmosphere settings"
            >
              <X size={22} aria-hidden="true" />
            </DialogClose>
          </DialogHeader>
          <DialogDescription className="settings-intro">
            An optional change of season, or a different time of day.
          </DialogDescription>
          <fieldset>
            <legend>Season & weather</legend>
            <div className="weather-options">
              {(
                [
                  { value: "none", label: "Off", icon: X },
                  { value: "summer", label: "Summer", icon: Sun },
                  { value: "snow", label: "Winter", icon: Snowflake },
                  { value: "rain", label: "Rain", icon: CloudRain },
                ] as const
              ).map((option) => (
                <Button
                  variant="outline"
                  key={option.value}
                  aria-pressed={settings.weather === option.value}
                  onClick={() => save({ ...settings, weather: option.value })}
                >
                  <option.icon size={19} aria-hidden="true" />
                  {option.label}
                </Button>
              ))}
            </div>
          </fieldset>
          <Label id="intensity-label" className="intensity-label">
            Intensity <output>{settings.intensity}%</output>
          </Label>
          <Slider
            className="weather-slider"
            thumbLabel="Intensity"
            min={0}
            max={100}
            step={5}
            value={[settings.intensity]}
            disabled={settings.weather === "none"}
            onValueChange={(value) =>
              save({
                ...settings,
                intensity: Array.isArray(value) ? value[0] : (value as number),
              })
            }
          />
          <Label className="daylight-label" htmlFor="daylight">
            Time of day
          </Label>
          <Select
            items={daylightOptions}
            value={settings.daylight}
            onValueChange={(value) => {
              if (!value) return;
              const daylight = value as Settings["daylight"];
              save({ ...settings, daylight });
              if (daylight !== "manual")
                setTheme(daylight === "night" ? "dark" : "light");
            }}
          >
            <SelectTrigger id="daylight" className="daylight-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {daylightOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="settings-note">
            Your preferences stay on this device. Rain and snow pause when the
            tab is hidden and stay still if you prefer reduced motion.
          </p>
          <Button
            variant="link"
            className="text-button"
            onClick={() => save(defaults)}
          >
            Reset atmosphere
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Atmosphere() {
  const { weather, intensity, daylight } = useAtmosphereSettings();
  useEffect(() => {
    document.documentElement.dataset.daylight = daylight;
  }, [daylight]);
  return (
    <div className="atmosphere-layer" aria-hidden="true">
      {weather === "summer" && (
        <div
          className="sunlight"
          style={{ opacity: (intensity / 100) * 0.15 }}
        />
      )}
      {(weather === "snow" || weather === "rain") && intensity > 0 && (
        <WeatherCanvas weather={weather} intensity={intensity} />
      )}
    </div>
  );
}

function WeatherCanvas({
  weather,
  intensity,
}: {
  weather: "snow" | "rain";
  intensity: number;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;
    let width = 0,
      height = 0,
      frame = 0,
      last = 0;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const count = Math.round(12 + intensity * 0.85);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 1 + Math.random() * 2,
      speed: 0.35 + Math.random() * 0.65,
    }));
    function resize() {
      width = innerWidth;
      height = innerHeight;
      const ratio = Math.min(devicePixelRatio, 1.5);
      element!.width = width * ratio;
      element!.height = height * ratio;
      context!.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    function draw(time: number) {
      const elapsed = Math.min(time - last || 16, 50);
      last = time;
      context!.clearRect(0, 0, width, height);
      const dark = document.documentElement.classList.contains("dark");
      context!.fillStyle = dark
        ? "rgba(230,237,255,.55)"
        : "rgba(68,87,113,.35)";
      context!.strokeStyle = dark
        ? "rgba(153,180,219,.3)"
        : "rgba(68,87,113,.22)";
      context!.lineWidth = 1;
      for (const particle of particles) {
        if (!motion.matches) {
          particle.y +=
            elapsed * particle.speed * (weather === "rain" ? 0.0006 : 0.000055);
          particle.x += elapsed * (weather === "rain" ? -0.00006 : 0.000008);
          if (particle.y > 1.03) particle.y = -0.03;
          if (particle.x < 0) particle.x = 1;
          if (particle.x > 1) particle.x = 0;
        }
        const x = particle.x * width,
          y = particle.y * height;
        context!.beginPath();
        if (weather === "snow") {
          context!.arc(x, y, particle.size, 0, Math.PI * 2);
          context!.fill();
        } else {
          context!.moveTo(x, y);
          context!.lineTo(x - 3, y + 14);
          context!.stroke();
        }
      }
      if (!motion.matches && !document.hidden)
        frame = requestAnimationFrame(draw);
    }
    function restart() {
      cancelAnimationFrame(frame);
      last = 0;
      if (!document.hidden) draw(0);
    }
    function onResize() {
      resize();
      restart();
    }
    resize();
    restart();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, [weather, intensity]);
  return <canvas ref={canvas} />;
}
