// Feature("Date Time Checker E2E");

// Scenario("Empty date field should return error message", async ({ I }) => {
//   I.amOnPage("/");
//   I.waitForText("Date & Time Validator", 5);
//   I.fillField("#date", "");
//   I.click(".validate-btn");
//   I.see("Please enter a date!", ".result");
//   I.wait(4);
// });

// Scenario("Leap year date should return success message", async ({ I }) => {
//   I.amOnPage("/");
//   I.waitForText("Date & Time Validator", 5);
//   I.fillField("#date", "29/02/2024"); // Leap year
//   I.click(".validate-btn");
//   I.see("29/02/2024 is correct date time!", ".result");
//   I.wait(4);
// });

// Scenario("Non-leap year date should return error message", async ({ I }) => {
//   I.amOnPage("/");
//   I.waitForText("Date & Time Validator", 5);
//   I.fillField("#date", "29/02/2023"); // Non-leap year
//   I.click(".validate-btn");
//   I.see("29/02/2023 is NOT correct date time!", ".result");
//   I.wait(4);
// });

Feature("Date API Validation @api");

Scenario("Valid date should return success message", async ({ I }) => {
  const res = await I.sendPostRequest("/api/validate", { date: "15/08/2020" });
  console.log("Response:", res.data); // Log response data
  I.assertEqual(res.status, 200);
  I.assertEqual(res.data.message, "15/08/2020 is correct date time!");
});

Scenario("Invalid day should return error message", async ({ I }) => {
  const res = await I.sendPostRequest("/api/validate", { date: "30/02/2020" });
  console.log("Response:", res.data);
  I.assertEqual(res.status, 200);
  I.assertEqual(res.data.message, "30/02/2020 is NOT correct date time!");
});

Scenario("Non-numeric month should return format error", async ({ I }) => {
  const res = await I.sendPostRequest("/api/validate", { date: "15/ab/2020" });
  console.log("Response:", res.data);
  I.assertEqual(res.status, 200);
  I.assertEqual(res.data.message, "Input data for Month is incorrect format!");
});

Scenario("Year out of range should return range error", async ({ I }) => {
  const res = await I.sendPostRequest("/api/validate", { date: "15/08/999" });
  console.log("Response:", res.data);
  I.assertEqual(res.status, 200);
  I.assertEqual(res.data.message, "Input data for Year is out of range!");
});

Scenario("Empty date should return format error", async ({ I }) => {
  const res = await I.sendPostRequest("/api/validate", { date: "" });
  console.log("Response:", res.data);
  I.assertEqual(res.status, 200);
  I.assertEqual(res.data.message, "Please enter date in dd/mm/yyyy format!");
});

Scenario("Missing date field should return format error", async ({ I }) => {
  const res = await I.sendPostRequest("/api/validate", {});
  console.log("Response:", res.data);
  I.assertEqual(res.status, 200);
  I.assertEqual(res.data.message, "Please enter date in dd/mm/yyyy format!");
});
