// CodeceptJS configuration for local Playwright runner
// Uses Playwright for browser automation and a small AI helper to call OpenAI when needed
require("dotenv").config();

const { setHeadlessWhen } = require("@codeceptjs/configure");
// enable headless mode when running with HEADLESS=true env var
setHeadlessWhen(process.env.HEADLESS === "true");

exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: process.env.APP_URL || "http://localhost:3000",
      show: true,
      browser: "chromium",
      waitForTimeout: 5000,
      chromium: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "date-time-checker-codeceptjs",
};
