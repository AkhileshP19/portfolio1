"use client";

import { useTheme } from "next-themes";
import type { CSSProperties } from "react";
import { useAtmosphereSettings } from "@/components/ui/Atmosphere";

// All layers remain mounted so a change of season dissolves into the next.
export default function HomeScene() {
  const { weather, daylight, intensity } = useAtmosphereSettings();
  const { resolvedTheme } = useTheme();
  const time =
    daylight === "manual"
      ? resolvedTheme === "dark"
        ? "night"
        : "afternoon"
      : daylight;
  const season = {
    none: "Quiet skies",
    summer: "Summer",
    snow: "Winter",
    rain: "Rainy days",
  }[weather];
  return (
    <figure
      className="home-scene"
      data-weather={weather}
      data-time={time}
      style={{ "--scene-intensity": intensity / 100 } as CSSProperties}
    >
      <svg
        viewBox="0 0 520 360"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <g className="scene-sky">
          <g className="scene-sun">
            <circle r="20" />
            <circle className="sun-halo" r="29" strokeDasharray="1 10" />
          </g>
          <g className="scene-night scene-fade">
            <path d="M377 45a23 23 0 1 0 27 31 24 24 0 0 1-27-31Z" />
            {[
              [86, 62],
              [218, 40],
              [312, 80],
              [439, 112],
              [146, 106],
            ].map(([x, y]) => (
              <path key={x} d={`M${x - 3} ${y}h6m-3-3v6`} />
            ))}
          </g>
          <g className="scene-cloud cloud-one">
            <path d="M65 103h86c8-1 8-13 0-14h-9c1-22-32-28-40-9-12-7-25 2-24 13h-13c-7 0-7 10 0 10Z" />
          </g>
          <g className="scene-cloud cloud-two">
            <path d="M318 118h113c12 0 12-16 0-16h-12c1-29-40-35-51-12-14-8-32 3-31 17h-19c-8 0-8 11 0 11Z" />
          </g>
          <g className="scene-birds scene-fade">
            <path d="M216 94q7-7 14 0 7-7 14 0m-56 26q5-5 10 0 5-5 10 0" />
          </g>
        </g>
        <g className="scene-land">
          <path d="M30 290q83-13 151-3m154 0q79-14 155 3M55 306h77m265 0h63" />
        </g>
        <g className="scene-tree tree-left">
          <path d="M108 284V192m0 46-22-19m22 1 19-21" />
          <path
            className="scene-leaves scene-fade"
            d="M77 222c-28-3-30-34-12-45-12-27 9-49 30-43 12-29 49-20 51 5 30 3 35 38 16 51 7 24-14 41-35 33"
          />
          <path
            className="scene-winter scene-fade"
            d="m108 133-40 63h22l-30 44h39m9-107 40 63h-22l30 44h-39m-39-54 13 3 17-24 17 24 13-3m-56 45 16 4 10-11 11 11 15-4"
          />
        </g>
        <g className="scene-tree tree-right">
          <path d="M419 284v-97m0 54-18-19m18 2 17-16" />
          <path
            className="scene-leaves scene-fade"
            d="M399 231c-23 0-34-22-21-39-13-17 0-38 19-37 2-25 35-33 47-10 23-1 34 24 20 41 22 24 1 50-27 45"
          />
          <path
            className="scene-winter scene-fade"
            d="m419 143-35 58h20l-31 43h34m12-101 35 58h-20l31 43h-34m-35-49 11 3 12-18 12 18 11-3"
          />
        </g>
        <g className="scene-house">
          <path className="house-fill" d="M174 204v80h163v-80l-81-66Z" />
          <path d="m157 207 99-82 99 82m-174-13 75-62 75 62M296 158v-28h23v47M291 130h33" />
          <path d="M239 284v-58a17 17 0 0 1 34 0v58m-8-32v5M167 285h178m-111 0-18 34m63-34 22 34m-77-12h69" />
          <rect
            className="scene-window"
            x="191"
            y="211"
            width="28"
            height="32"
            rx="1"
          />
          <path d="M205 211v32m-14-16h28" />
          <rect
            className="scene-window"
            x="291"
            y="211"
            width="28"
            height="32"
            rx="1"
          />
          <path d="M305 211v32m-14-16h28" />
          <circle className="scene-window" cx="256" cy="178" r="12" />
          <path d="M244 178h24m-12-12v24" />
          <path
            className="scene-winter scene-fade snow-roof"
            d="m157 207 99-82 99 82-13-3-8-12-14-4-12-16-11-4-14-16-13-6-14-13-14 13-14 6-14 16-11 4-12 16-14 4-8 12Z"
          />
          <g className="scene-smoke scene-winter scene-fade">
            <path d="M307 118c-12-12 10-17 0-29m9 24c-8-9 9-13 2-23" />
          </g>
        </g>
        <g className="scene-grass scene-fade">
          <path d="m49 284-4-9m4 9 5-7m97 11-4-12m4 12 5-7m205 9-4-12m4 12 6-8m106 6-4-11m4 11 5-6" />
        </g>
        <g className="scene-summer scene-fade">
          <path d="M66 294v-12m-1 8-5-4m326 8v-12m0 8 5-4" />
          <path d="M66 282c-16-3-5-17 0-6 5-11 16 3 0 6Zm320 0c-16-3-5-17 0-6 5-11 16 3 0 6Z" />
          <g className="scene-butterfly">
            <path d="M361 217c-19-18-22 6 0 0 20-18 23 6 0 0Zm0 0v6" />
          </g>
        </g>
        <g className="scene-winter scene-fade">
          <path d="M32 294q35-15 66-3 33-12 65 0m182 0q30-13 64-2 41-13 81 5" />
          <g className="scene-snowman">
            <circle cx="371" cy="271" r="17" />
            <circle cx="371" cy="246" r="11" />
            <path d="M359 235h24m-21 0v-12h17v12m-19 33-14-10m36 10 14-11m-34-2h18l-3 12m-2-22 10 3-10 2" />
            <path d="M368 243h.1m3 27h.1m0 7h.1" strokeWidth="3" />
          </g>
        </g>
        <g className="scene-rain scene-fade">
          <ellipse className="scene-ripple" cx="367" cy="303" rx="28" ry="4" />
          <ellipse className="scene-ripple" cx="146" cy="303" rx="18" ry="3" />
          <path d="M357 281v-31m-18 0a18 18 0 0 1 36 0q-5-5-9 0-5-5-9 0-5-5-9 0-5-5-9 0Zm18 31q0 7 6 3" />
        </g>
        <g className="scene-precipitation">
          {Array.from({ length: 18 }, (_, i) => {
            const x = 52 + ((i * 73) % 420),
              y = 120 + ((i * 37) % 150);
            return (
              <g
                key={i}
                style={{ animationDelay: `-${i * 0.37}s` }}
                className="scene-drop"
              >
                <path className="scene-rain scene-fade" d={`m${x} ${y} -3 9`} />
                <circle
                  className="scene-winter scene-fade"
                  cx={x}
                  cy={y}
                  r="1.4"
                />
              </g>
            );
          })}
        </g>
      </svg>
      <figcaption>
        <span className="scene-caption-line" />
        {season}
        <span aria-hidden="true"> / </span>
        <span className="scene-time-label">{time}</span>
      </figcaption>
    </figure>
  );
}
