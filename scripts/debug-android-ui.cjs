/**
 * Android App UI Debug Script
 * Get current page source to understand actual UI structure
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

async function debugAndroidApp() {
  console.log("🔍 Debugging Android DateTimeChecker App...\n");

  let driver;

  try {
    // Connect to Appium server
    console.log("📱 Connecting to Android device...");
    driver = await remote(opts);
    console.log("✅ Connected successfully!\n");

    // Wait for app to load
    await driver.pause(3000);

    // Get current activity and package
    console.log("📱 App Information:");
    try {
      const currentActivity = await driver.getCurrentActivity();
      const currentPackage = await driver.getCurrentPackage();
      console.log(`   Package: ${currentPackage}`);
      console.log(`   Activity: ${currentActivity}\n`);
    } catch (e) {
      console.log("   Could not get app info\n");
    }

    // Get page source
    console.log("📄 Getting current page source...");
    const pageSource = await driver.getPageSource();

    // Save to file for analysis
    const fs = require("fs");
    const path = require("path");

    const outputDir = path.join(__dirname, "..", "_output");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `android-ui-debug-${timestamp}.xml`;
    const filepath = path.join(outputDir, filename);

    fs.writeFileSync(filepath, pageSource);
    console.log(`✅ Page source saved to: ${filepath}\n`);

    // Parse and show key elements
    console.log("🔍 Key UI Elements Found:");

    // Look for common input types
    const patterns = [
      { name: "EditText", pattern: /android\.widget\.EditText/g },
      { name: "Button", pattern: /android\.widget\.Button/g },
      { name: "TextView", pattern: /android\.widget\.TextView/g },
      { name: "DatePicker", pattern: /android\.widget\.DatePicker/g },
      { name: "TimePicker", pattern: /android\.widget\.TimePicker/g },
      { name: "ImageButton", pattern: /android\.widget\.ImageButton/g },
      { name: "LinearLayout", pattern: /android\.widget\.LinearLayout/g },
    ];

    patterns.forEach(({ name, pattern }) => {
      const matches = pageSource.match(pattern);
      if (matches) {
        console.log(`   ${name}: ${matches.length} found`);
      }
    });

    // Look for text content
    console.log("\n📝 Text Content Found:");
    const textMatches = pageSource.match(/text="([^"]+)"/g);
    if (textMatches) {
      const uniqueTexts = [...new Set(textMatches.slice(0, 10))]; // First 10 unique
      uniqueTexts.forEach((text) => {
        const content = text.match(/text="([^"]+)"/)[1];
        if (content.trim() && content.length > 1) {
          console.log(`   "${content}"`);
        }
      });
    }

    // Look for clickable elements
    console.log("\n👆 Clickable Elements:");
    const clickableMatches = pageSource.match(
      /clickable="true"[^>]*text="([^"]*)"/g
    );
    if (clickableMatches) {
      clickableMatches.slice(0, 5).forEach((match) => {
        const text = match.match(/text="([^"]*)"/)[1];
        if (text) {
          console.log(`   Clickable: "${text}"`);
        }
      });
    }

    // Test basic interaction
    console.log("\n🔄 Testing Basic Interaction...");

    // Find first clickable element
    try {
      const clickableElements = await driver.$$(
        "android=new UiSelector().clickable(true)"
      );
      console.log(`   Found ${clickableElements.length} clickable elements`);

      if (clickableElements.length > 0) {
        // Get info about first clickable element
        const firstElement = clickableElements[0];
        const elementText = await firstElement.getText().catch(() => "No text");
        const elementClass = await firstElement
          .getAttribute("className")
          .catch(() => "Unknown class");

        console.log(
          `   First clickable element: "${elementText}" (${elementClass})`
        );

        // Try clicking it
        await firstElement.click();
        console.log("   ✅ Successfully clicked first element");

        // Wait and check for changes
        await driver.pause(2000);

        // Get new page source to see changes
        const newPageSource = await driver.getPageSource();
        const changed = newPageSource !== pageSource;
        console.log(`   UI Changed: ${changed}`);

        if (changed) {
          const newFilename = `android-ui-after-click-${timestamp}.xml`;
          const newFilepath = path.join(outputDir, newFilename);
          fs.writeFileSync(newFilepath, newPageSource);
          console.log(`   ✅ New page source saved: ${newFilename}`);
        }
      }
    } catch (e) {
      console.log(`   ❌ Interaction test failed: ${e.message}`);
    }

    console.log("\n🎉 Debug completed! Check _output folder for XML files.");
  } catch (error) {
    console.error("❌ Debug failed:", error.message);
  } finally {
    // Cleanup
    if (driver) {
      await driver.deleteSession();
      console.log("\n🔚 Debug session ended");
    }
  }
}

// Run debug
if (require.main === module) {
  debugAndroidApp().catch(console.error);
}

module.exports = debugAndroidApp;
