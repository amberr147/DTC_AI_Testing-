Feature("Date Time Checker E2E");

Scenario("E2E - Validate empty date field @e2e", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Date & Time Validator", 5);
  I.fillField("#date", ""); // Empty date field
  I.fillField("#time", "12:00");
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

  I.click(".validate-btn");
  I.waitForElement(".result", 5);
  I.see("Please enter a date!", ".result");
});

Scenario(
  "E2E - Validate empty time field with valid past date (15/08/2020) @e2e",
  async ({ I }) => {
    I.amOnPage("/");
    I.waitForText("Date & Time Validator", 5);
    I.fillField("#date", "15/08/2020");
    I.fillField("#time", ""); // Empty time field
    I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

    I.click(".validate-btn");
    I.waitForElement(".result", 5);
    I.see("15/08/2020 is correct date time!", ".result");
  }
);
