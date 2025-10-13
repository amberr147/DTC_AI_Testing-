// ---------------------------------------------------------------
// CodeceptJS configuration for both E2E (Playwright), API, and Mobile testing
// ---------------------------------------------------------------
// 1️⃣ E2E tests  : simulate user behavior on the DateTimeChecker web app
// 2️⃣ API tests  : send HTTP requests directly to backend endpoints
// ---------------------------------------------------------------

require("dotenv").config();
const { setHeadlessWhen } = require("@codeceptjs/configure");

// Enable headless mode when CI=true or HEADLESS=true
setHeadlessWhen(process.env.CI === "true" || process.env.HEADLESS === "true");

exports.config = {
  // ---------------------------------------------------------------
  // TEST FILES
  // ---------------------------------------------------------------
  tests: "./tests/**/*_test.js", // Includes both E2E, API, and Mobile test files
  output: "./output",

  // ---------------------------------------------------------------
  // HELPERS (where we define automation drivers)
  // ---------------------------------------------------------------
  helpers: {
    // --- (1) PLAYWRIGHT HELPER: for E2E browser automation ---
    Playwright: {
      url: process.env.APP_URL || "http://localhost:3000", // Frontend app URL
      show: !process.env.CI, // hide browser in CI, show locally
      browser: "chromium",
      waitForTimeout: 5000,
      chromium: {
        headless: !!process.env.CI, // force headless in CI
        args: process.env.CI
          ? [
              "--no-sandbox",
              "--disable-setuid-sandbox",
              "--disable-dev-shm-usage",
              "--disable-extensions",
              "--disable-background-timer-throttling",
            ]
          : ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },

    // --- (2) REST HELPER: for API testing ---
    REST: {
      endpoint: process.env.API_URL || "http://localhost:8080",
      defaultHeaders: {
        "Content-Type": "application/json",
      },
      debug: true,
    },

    // --- (3) ASSERTION HELPER ---
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
  },

  // ---------------------------------------------------------------
  // FILES TO INCLUDE (shared objects, steps, etc.)
  // ---------------------------------------------------------------
  include: {
    I: "./steps_file.cjs",
  },

  // ---------------------------------------------------------------
  // PROJECT INFO
  // ---------------------------------------------------------------
  bootstrap: null,
  mocha: {},
  name: "date-time-checker-codeceptjs",

  // ---------------------------------------------------------------
  // CUSTOM TEST SUITES
  // ---------------------------------------------------------------
  // 💡 Example commands:
  //    ▶ npx codeceptjs run --grep "@api" --steps       → Run API testsư
  //    ▶ npx codeceptjs run --grep "@e2e" --steps       → Run normal E2E tests
  // ---------------------------------------------------------------
};
