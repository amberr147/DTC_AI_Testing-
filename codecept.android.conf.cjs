/** @type {CodeceptJS.MainConfig} */
module.exports = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://127.0.0.1:4723",
      browser: "chrome",
      host: "127.0.0.1",
      port: 4723,
      path: "/",
      desiredCapabilities: {
        platformName: "Android",
        platformVersion: "10.0",
        deviceName: "Android Device",
        automationName: "UiAutomator2",
        appPackage: "com.example.datetimechecker",
        appActivity: ".MainActivity",
        autoGrantPermissions: true,
        noReset: true,
        fullReset: false,
      },
    },
  },
  include: {
    I: "./steps_file.cjs",
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: false,
    },
  },
  name: "Real Android Device Testing",
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/*.js"],
  },
};
