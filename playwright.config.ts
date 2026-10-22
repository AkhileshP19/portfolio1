import { defineConfig } from "@playwright/test";
const port = process.env.PORTFOLIO_TEST_PORT || "3100";
export default defineConfig({
  testDir: "./tests/browser",
  use: {
    baseURL: `http://localhost:${port}`,
    channel: "msedge",
    headless: true,
  },
  reporter: "list",
  workers: 1,
  webServer: {
    command: `npm run start -- --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
