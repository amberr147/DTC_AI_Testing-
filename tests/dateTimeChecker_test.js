Feature("Date Time Checker E2E");

Scenario(
  "Validate a valid date and time for today (current date and time)",
  async ({ I }) => {
    I.amOnPage("/");
    I.waitForText("Enhanced Date & Time Validator", 5);
    I.click(".now-btn"); // Thiết lập ngày và giờ hiện tại
    I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

    I.click(".validate-btn");
    I.waitForElement(".result", 5);
    I.see("Valid Date", ".result"); // Kiểm tra kết quả hợp lệ
    I.wait(3); // Chờ 3 giây để xem kết quả
  }
);

Scenario("Validate an invalid date format (31st April 2023)", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Enhanced Date & Time Validator", 5);
  I.fillField("#date", "31/04/2023"); // Ngày không hợp lệ trong tháng 4
  I.fillField("#time", "15:00");
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

  I.click(".validate-btn");
  I.waitForElement(".result", 5);
  I.see("is NOT correct date time", ".result"); // Kiểm tra thông báo lỗi thực tế
  I.wait(3); // Chờ 3 giây để xem kết quả
});

Scenario("Validate an edge case date (1st January 1970)", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Enhanced Date & Time Validator", 5);
  I.fillField("#date", "01/01/1970"); // Ngày hợp lệ
  I.fillField("#time", "00:00");
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");

  I.click(".validate-btn");
  I.waitForElement(".result", 5);
  I.see("Valid Date", ".result"); // Kiểm tra kết quả hợp lệ
  I.wait(3); // Chờ 3 giây để xem kết quả
});

//thhtththhtr
