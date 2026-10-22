import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
const routes = ["/", "/work/xseed-ai", "/work/creator-os", "/projects"];
for (const width of [320, 375, 430, 768, 1024, 1440]) {
  test(`responsive routes at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      if (
        [375, 1440].includes(width) &&
        ["/", "/work/creator-os"].includes(route)
      ) {
        await mkdir("artifacts", { recursive: true });
        await page.screenshot({
          path: `artifacts/${route === "/" ? "home" : "creator-os"}-${width}.png`,
        });
        if (route === "/")
          await page
            .locator("#work")
            .screenshot({ path: `artifacts/work-${width}.png` });
      }
    }
  });
}
test("theme persistence, keyboard preview selection and accessibility", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page
    .getByRole("link", { name: "CreatorOS", exact: true })
    .last()
    .focus();
  await expect(page.locator(".preview-layer.visible")).toContainText(
    "From idea to published.",
  );
  for (const theme of ["dark", "light"]) {
    await page.getByRole("button", { name: `Use ${theme} theme` }).click();
    await page.reload();
    await expect(page.locator("html")).toHaveClass(
      new RegExp(`\\b${theme}\\b`),
    );
    if (theme === "dark")
      await page.screenshot({ path: "artifacts/home-dark.png" });
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  }
  for (const route of routes.slice(1)) {
    await page.goto(route);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  }
});
test("metadata, sitemap, project order and unknown routes", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator(".project-row h3")).toHaveText([
    "Xseed.AI",
    "CreatorOS",
    "Doctor Appointment System",
  ]);
  await expect(page.locator("iframe")).toHaveCount(0);
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://akhilesh-patil.vercel.app${route === "/" ? "" : route}`,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Akhilesh|Xseed|CreatorOS|Doctor/,
    );
  }
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/opengraph-image")).status()).toBe(200);
  expect((await request.get("/work/not-a-project")).status()).toBe(404);
  expect((await request.get("/work/doctor-appointment")).status()).toBe(404);
  await page.goto("/projects");
  await expect(page.locator(".directory-project")).toHaveCount(5);
  await expect(page.getByRole("link", { name: /Case study/ })).toHaveCount(2);
});
test("weather preferences, intensity and daylight persist without blocking content", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Atmosphere settings", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", { name: "Winter", exact: true }).click();
  const slider = dialog.getByRole("slider", { name: "Intensity" });
  await slider.focus();
  await slider.press("Home");
  for (let i = 0; i < 13; i++) await slider.press("ArrowRight");
  await dialog.getByRole("combobox", { name: "Time of day" }).click();
  await page.getByRole("option", { name: "Night", exact: true }).click();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await page.screenshot({ path: "artifacts/shadcn-atmosphere-desktop.png" });
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await page.reload();
  await expect(page.locator(".atmosphere-layer canvas")).toHaveCount(1);
  await expect(page.locator("html")).toHaveAttribute("data-daylight", "night");
  await page
    .getByRole("button", { name: "Atmosphere settings", exact: true })
    .click();
  await expect(dialog.getByRole("slider", { name: "Intensity" })).toHaveValue(
    "65",
  );
  await dialog.getByRole("button", { name: "Rain", exact: true }).click();
  await dialog.getByRole("button", { name: "Reset atmosphere" }).click();
  await expect(page.locator(".atmosphere-layer canvas")).toHaveCount(0);
  await dialog
    .getByRole("button", { name: "Close atmosphere settings" })
    .click();
  await page.getByRole("button", { name: "Use light theme" }).click();
});
test("mobile menu dismissal, focus, copy email and reduced motion", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  const atmosphere = page.getByRole("button", {
    name: "Atmosphere settings",
    exact: true,
  });
  await atmosphere.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("combobox", { name: "Time of day" }).click();
  await page.getByRole("option", { name: "Evening", exact: true }).click();
  await page.screenshot({ path: "artifacts/shadcn-atmosphere-mobile.png" });
  await page.getByRole("button", { name: "Close atmosphere settings" }).click();
  await expect(atmosphere).toBeFocused();
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Work", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.locator(".copy-control [role=status]")).toHaveText(
    "Email copied.",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "akhileshpatil69@gmail.com",
  );
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await page
    .locator("#contact")
    .screenshot({ path: "artifacts/shadcn-contact-mobile.png" });
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
});

test("home scene follows every season and time, with responsive and reduced-motion layouts", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const scene = page.locator(".home-scene");
  await expect(scene).toBeVisible();
  for (const [label, weather] of [
    ["Off", "none"],
    ["Summer", "summer"],
    ["Winter", "snow"],
    ["Rain", "rain"],
  ]) {
    await page
      .getByRole("button", { name: "Atmosphere settings", exact: true })
      .click();
    await page.getByRole("button", { name: label, exact: true }).click();
    for (const time of ["Morning", "Afternoon", "Evening", "Night"]) {
      await page.getByRole("combobox", { name: "Time of day" }).click();
      await page.getByRole("option", { name: time, exact: true }).click();
      await expect(scene).toHaveAttribute("data-weather", weather);
      await expect(scene).toHaveAttribute("data-time", time.toLowerCase());
      await expect(scene.locator(".scene-time-label")).toHaveText(
        time.toLowerCase(),
      );
    }
    await page
      .getByRole("button", { name: "Close atmosphere settings" })
      .click();
    await scene.screenshot({ path: `artifacts/scene-${weather}-night.png` });
  }
  expect(
    await scene
      .locator(".scene-tree")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await page.getByRole("button", { name: "Use light theme" }).click();
  await expect(scene).toHaveAttribute("data-time", "afternoon");
  await page.screenshot({ path: "artifacts/scene-desktop.png" });
  await page.setViewportSize({ width: 768, height: 1000 });
  await expect(scene).toBeVisible();
  await page.screenshot({ path: "artifacts/scene-tablet.png" });
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(scene).toBeHidden();
  const heading = await page.locator("#hero-title").boundingBox();
  const surname = await page.locator("#hero-title > span").boundingBox();
  expect(heading?.x).toBe(surname?.x);
  await page.screenshot({ path: "artifacts/scene-mobile.png" });
});
