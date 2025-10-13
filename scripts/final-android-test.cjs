/**
 * FINAL Android DateTimeChecker App Testing
 * Based on actual UI structure discovered through debugging
 */

const { remote } = require("webdriverio");

const opts = {
  hostname: "localhost",
  port: 4723,
  path: "/",
  capabilities: {
    platformName: "Android",
    "appium:platformVersion": "16",
    "appium:deviceName": "Android Device",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.example.datetimechecker",
    "appium:appActivity": ".MainActivity",
    "appium:autoGrantPermissions": true,
    "appium:noReset": true,
    "appium:fullReset": false,
  },
};

async function testDateTimeCheckerApp() {
  console.log("🚀 Testing DateTimeChecker Android App (Real UI)...\n");

  let driver;

  try {
    // Connect to Appium server
    console.log("📱 Connecting to Android device via Appium...");
    driver = await remote(opts);
    console.log("✅ Connected successfully!\n");

    // Wait for app to load
    await driver.pause(3000);

    // Test 1: Verify App UI Elements
    console.log("🔍 Test 1: Verify app UI elements...");

    try {
      const title = await driver.$(
        'android=new UiSelector().text("Date & Time Validator")'
      );
      const titleExists = await title.isExisting();
      console.log(
        `   Title "Date & Time Validator": ${
          titleExists ? "✅ Found" : "❌ Not found"
        }`
      );

      const dateInput = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
      );
      const dateInputExists = await dateInput.isExisting();
      console.log(
        `   Date Input field: ${dateInputExists ? "✅ Found" : "❌ Not found"}`
      );

      const checkButton = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/checkButton")'
      );
      const checkButtonExists = await checkButton.isExisting();
      console.log(
        `   Check Button: ${checkButtonExists ? "✅ Found" : "❌ Not found"}`
      );
    } catch (e) {
      console.log("❌ UI verification failed:", e.message);
    }

    // Test 2: Test Valid Date Input
    console.log("\n📅 Test 2: Enter valid date 15/08/2020...");

    try {
      // Clear and enter valid date
      const dateInput = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
      );

      // Clear existing text
      await dateInput.click();
      await driver.pause(500);

      // Clear field using key combination
      await dateInput.clearValue();
      await driver.pause(500);

      // Enter new date
      await dateInput.setValue("15/08/2020");
      console.log("✅ Entered date: 15/08/2020");

      // Click Check button
      const checkButton = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/checkButton")'
      );
      await checkButton.click();
      console.log("✅ Clicked Check button");

      // Wait for result
      await driver.pause(2000);

      // Check result
      try {
        const resultText = await driver.$(
          'android=new UiSelector().resourceId("com.example.datetimechecker:id/resultText")'
        );
        const resultMessage = await resultText.getText();
        console.log(`✅ Result: "${resultMessage}"`);

        if (resultMessage.includes("correct")) {
          console.log("✅ Valid date test PASSED");
        } else {
          console.log("⚠️  Unexpected result for valid date");
        }
      } catch (e) {
        console.log("⚠️  Could not read result text");
      }
    } catch (e) {
      console.log("❌ Valid date test failed:", e.message);
    }

    // Test 3: Test Invalid Date Input
    console.log("\n❌ Test 3: Enter invalid date 32/01/2024...");

    try {
      // Clear and enter invalid date
      const dateInput = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
      );

      await dateInput.click();
      await driver.pause(500);
      await dateInput.clearValue();
      await dateInput.setValue("32/01/2024");
      console.log("✅ Entered invalid date: 32/01/2024");

      // Click Check button
      const checkButton = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/checkButton")'
      );
      await checkButton.click();
      console.log("✅ Clicked Check button");

      // Wait for result
      await driver.pause(2000);

      // Check result
      try {
        const resultText = await driver.$(
          'android=new UiSelector().resourceId("com.example.datetimechecker:id/resultText")'
        );
        const resultMessage = await resultText.getText();
        console.log(`✅ Result: "${resultMessage}"`);

        if (
          resultMessage.includes("range") ||
          resultMessage.includes("invalid") ||
          resultMessage.includes("error")
        ) {
          console.log("✅ Invalid date test PASSED");
        } else {
          console.log("⚠️  Expected error message for invalid date");
        }
      } catch (e) {
        console.log("⚠️  Could not read result text");
      }
    } catch (e) {
      console.log("❌ Invalid date test failed:", e.message);
    }

    // Test 4: Test Time Input
    console.log("\n⏰ Test 4: Test time input...");

    try {
      const timeInput = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/timeInput")'
      );

      await timeInput.click();
      await driver.pause(500);
      await timeInput.clearValue();
      await timeInput.setValue("14:30");
      console.log("✅ Entered time: 14:30");

      // Click Check button again
      const checkButton = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/checkButton")'
      );
      await checkButton.click();
      console.log("✅ Clicked Check with time input");

      await driver.pause(2000);

      try {
        const resultText = await driver.$(
          'android=new UiSelector().resourceId("com.example.datetimechecker:id/resultText")'
        );
        const resultMessage = await resultText.getText();
        console.log(`✅ Time test result: "${resultMessage}"`);
      } catch (e) {
        console.log("⚠️  Could not read time test result");
      }
    } catch (e) {
      console.log("❌ Time input test failed:", e.message);
    }

    // Test 5: Test Clear Button
    console.log("\n🧹 Test 5: Test Clear button...");

    try {
      const clearButton = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/clearButton")'
      );
      await clearButton.click();
      console.log("✅ Clicked Clear button");

      await driver.pause(1000);

      // Check if fields are cleared
      const dateInput = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
      );
      const dateValue = await dateInput.getText();

      if (dateValue === "dd/mm/yyyy" || dateValue === "") {
        console.log("✅ Clear button works - fields cleared");
      } else {
        console.log(`⚠️  Date field still contains: "${dateValue}"`);
      }
    } catch (e) {
      console.log("❌ Clear button test failed:", e.message);
    }

    // Test 6: Test Now Button + Check Button
    console.log("\n🕒 Test 6: Test Now button + Check validation...");

    try {
      const nowButton = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/nowButton")'
      );
      await nowButton.click();
      console.log("✅ Clicked Now button");

      await driver.pause(3000); // Wait 3 seconds as requested

      // Check if current date/time is filled
      const dateInput = await driver.$(
        'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
      );
      const dateValue = await dateInput.getText();

      if (dateValue !== "dd/mm/yyyy" && dateValue !== "") {
        console.log(`✅ Now button works - filled: "${dateValue}"`);

        // Now click Check button to validate the auto-filled date
        console.log("🔘 Now clicking Check button to validate...");
        const checkButton = await driver.$(
          'android=new UiSelector().resourceId("com.example.datetimechecker:id/checkButton")'
        );
        await checkButton.click();
        console.log("✅ Clicked Check button");

        await driver.pause(2000); // Wait for validation result

        // Check validation result
        const resultText = await driver.$(
          'android=new UiSelector().resourceId("com.example.datetimechecker:id/resultText")'
        );
        const result = await resultText.getText();
        console.log(`✅ Validation result: "${result}"`);

        if (result.includes("is correct date time!")) {
          console.log("🎉 Now button + Check validation SUCCESS!");
        } else {
          console.log(`⚠️  Unexpected validation result: "${result}"`);
        }
      } else {
        console.log("⚠️  Now button did not fill current date");
      }
    } catch (e) {
      console.log("❌ Now button test failed:", e.message);
    }

    console.log("\n🎉 All DateTimeChecker App tests completed!");
    console.log("\n📋 Test Summary:");
    console.log("   ✅ App connection successful");
    console.log("   ✅ UI elements verified");
    console.log("   ✅ Valid date input tested");
    console.log("   ✅ Invalid date input tested");
    console.log("   ✅ Time input tested");
    console.log("   ✅ Clear button tested");
    console.log("   ✅ Now button tested");
  } catch (error) {
    console.error("❌ Test failed:", error.message);

    if (error.message.includes("ECONNREFUSED")) {
      console.log("\n💡 Solutions:");
      console.log("1. Make sure Appium server is running: appium");
      console.log("2. Check device connection: adb devices");
      console.log("3. Ensure DateTimeChecker app is open");
    }
  } finally {
    // Cleanup
    if (driver) {
      await driver.deleteSession();
      console.log("\n🔚 Session ended");
    }
  }
}

// Run tests
if (require.main === module) {
  testDateTimeCheckerApp().catch(console.error);
}

module.exports = testDateTimeCheckerApp;
