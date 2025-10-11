Feature("Date Time Checker E2E");

Scenario("Validate empty date field", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Date & Time Validator", 5);
  I.fillField("#date", ""); // Empty date field
  I.fillField("#time", "12:00");
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

  I.click(".validate-btn");
  I.waitForElement(".result", 5);
  I.see("Please enter a date!", ".result"); // Check result for empty date field
  I.wait(3); // Wait 3 seconds to see result
});

Scenario("Validate valid future date (31/12/2025)", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Date & Time Validator", 5);
  I.fillField("#date", "31/12/2025"); // Valid future date
  I.fillField("#time", "15:30");
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

  I.click(".validate-btn");
  I.waitForElement(".result", 5);
  I.see("31/12/2025 is correct date time!", ".result"); // Check result for valid future date
  I.wait(3); // Wait 3 seconds to see result
});

Scenario("Validate invalid date (31/04/2024)", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Date & Time Validator", 5);
  I.fillField("#date", "31/04/2024"); // Invalid date (April has 30 days)
  I.fillField("#time", "12:00");
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

  I.click(".validate-btn");
  I.waitForElement(".result", 5);
  I.see("31/04/2024 is NOT correct date time!", ".result"); // Check result for invalid date
  I.wait(3); // Wait 3 seconds to see result
});

Scenario(
  "Validate valid past date with empty time (01/01/2020)",
  async ({ I }) => {
    I.amOnPage("/");
    I.waitForText("Date & Time Validator", 5);
    I.fillField("#date", "01/01/2020"); // Valid past date
    I.fillField("#time", ""); // Empty time field
    I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

    I.click(".validate-btn");
    I.waitForElement(".result", 5);
    I.see("01/01/2020 is correct date time!", ".result"); // Check result for valid past date
    I.wait(3); // Wait 3 seconds to see result
  }
);
