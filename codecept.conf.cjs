// CodeceptJS configuration for both E2E (Playwright) and API testing
// ---------------------------------------------------------------
// This config lets you run:
// 1️⃣ E2E tests: simulate user behavior on the DateTimeChecker web app
// 2️⃣ API tests: send HTTP requests directly to the backend endpoints
// ---------------------------------------------------------------
require("dotenv").config();
const { setHeadlessWhen } = require("@codeceptjs/configure");
const { debug } = require("openai/core.mjs");

// Enable headless mode when HEADLESS=true
setHeadlessWhen(process.env.HEADLESS === "true");

exports.config = {
  // ---------------------------------------------------------------
  // TEST FILES
  // ---------------------------------------------------------------
  tests: "./tests/**/*_test.js", // Includes both E2E and API test files
  output: "./output",

  // ---------------------------------------------------------------
  // HELPERS (where we define automation drivers)
  // ---------------------------------------------------------------
  helpers: {
    // --- (1) PLAYWRIGHT HELPER: for E2E browser automation ---
    Playwright: {
      url: process.env.APP_URL || "http://localhost:3000", // Frontend app URL
      show: true, // show browser window
      browser: "chromium",
      waitForTimeout: 5000,
      chromium: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },

    // --- (2) REST HELPER: for API testing ---
    // This lets us send HTTP requests directly to the backend
    REST: {
      endpoint: process.env.API_URL || "http://localhost:8080",
      defaultHeaders: {
        "Content-Type": "application/json",
      },
      debug: true,
    },

    // --- (3) ASSERTION HELPER (optional but nice for readable asserts) ---
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
  // CUSTOM TEST SUITES (optional)
  // You can run specific types of tests like:
  // npx codeceptjs run --grep "@api"
  // ---------------------------------------------------------------
};
