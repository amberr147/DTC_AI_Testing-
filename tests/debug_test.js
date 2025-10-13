Feature("Debug Appium Connection");

Scenario("Test Appium Helper @debug", async ({ I }) => {
  console.log("🔧 Testing Appium helper methods...");

  // Test basic methods
  console.log("Available I methods:", Object.getOwnPropertyNames(I));

  try {
    I.getCurrentActivity();
    console.log("✅ getCurrentActivity works");
  } catch (e) {
    console.log("❌ getCurrentActivity failed:", e.message);
  }

  try {
    I.seeAppIsInstalled("com.example.datetimechecker");
    console.log("✅ seeAppIsInstalled works");
  } catch (e) {
    console.log("❌ seeAppIsInstalled failed:", e.message);
  }
});
