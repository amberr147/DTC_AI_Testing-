# 📱 Android Mobile App Testing Guide

**Complete guide cho Android DateTimeChecker app testing với WebDriverIO + Appium**

## 📋 Table of Contents

1. [🎯 Overview](#-overview)
2. [🛠️ Prerequisites & Installation](#️-prerequisites--installation)
3. [📱 Android App Setup](#-android-app-setup)
4. [⚡ Quick Start](#-quick-start)
5. [🧪 Test Scenarios](#-test-scenarios)
6. [🔧 Technical Implementation](#-technical-implementation)
7. [🐛 Troubleshooting](#-troubleshooting)
8. [📊 Best Practices](#-best-practices)

## 🎯 Overview

Hệ thống testing cho Android DateTimeChecker application sử dụng:

- **Direct WebDriverIO + Appium** approach (bypass CodeceptJS compatibility issues)
- **Real Android device/emulator** testing (không phải web simulation)
- **Resource ID-based** element selection cho reliability
- **Comprehensive test coverage** cho tất cả app functionality

### ✅ What This Tests

| Feature             | Description                      | Validation                   |
| ------------------- | -------------------------------- | ---------------------------- |
| **UI Elements**     | Verify all app components exist  | Title, inputs, buttons found |
| **Date Validation** | Valid/invalid date input testing | Success/error messages       |
| **Time Input**      | Time field functionality         | Format acceptance            |
| **Button Actions**  | Clear, Now, Check buttons        | Expected behaviors           |
| **Error Handling**  | Invalid data responses           | Proper error messages        |

## 🛠️ Prerequisites & Installation

### System Requirements

- **Windows 10/11** (đã test trên Windows 11)
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Android Studio** với SDK đã cài
- **Android Device** hoặc **Emulator**

### 1. Android SDK Setup

```powershell
# Download Android Studio: https://developer.android.com/studio
# Install với Android SDK

# Add Android SDK to PATH
# Thêm vào System Environment Variables:
C:\Users\[USERNAME]\AppData\Local\Android\Sdk\platform-tools
C:\Users\[USERNAME]\AppData\Local\Android\Sdk\tools
C:\Users\[USERNAME]\AppData\Local\Android\Sdk\tools\bin

# Restart PowerShell sau khi setup PATH
```

### 2. ADB Verification

```powershell
# Test ADB installation
adb version
# Should show: Android Debug Bridge version x.x.x

# Auto setup ADB (nếu cần)
.\setup-adb.bat
```

### 3. Appium Installation

```powershell
# Install Appium globally
npm install -g appium

# Install UiAutomator2 driver
npm install -g appium-uiautomator2-driver

# Verify Appium installation
appium --version
# Should show: 3.1.0 or higher

# Check Appium doctor (optional)
npm install -g appium-doctor
appium-doctor --android
```

### 4. Project Dependencies

```powershell
# In project directory
npm install

# Dependencies được cài:
# - webdriverio: 9.20.0 (Android automation)
# - appium: 3.1.0 (Mobile testing server)
# - appium-uiautomator2-driver: 5.0.5 (Android driver)
```

## 📱 Android App Setup

### DateTimeChecker App Requirements

Your Android app phải có:

```xml
<!-- Package name (required) -->
<manifest package="com.example.datetimechecker">

<!-- Main Activity (required) -->
<activity android:name=".MainActivity">

<!-- Required UI Elements with exact resource IDs -->
<EditText android:id="@+id/dateInput"
    android:hint="dd/mm/yyyy" />

<EditText android:id="@+id/timeInput"
    android:hint="hh:mm" />

<Button android:id="@+id/checkButton"
    android:text="Check" />

<Button android:id="@+id/clearButton"
    android:text="Clear" />

<Button android:id="@+id/nowButton"
    android:text="Now" />

<TextView android:id="@+id/resultText" />

<!-- App title (for UI verification) -->
<TextView android:text="Date &amp; Time Validator" />
```

### Build & Install App

```powershell
# In Android Studio:
# 1. Build → Build Bundle(s) / APK(s) → Build APK(s)
# 2. Install APK to device/emulator

# Or via ADB:
adb install path\to\your\DateTimeChecker.apk

# Verify app installation
adb shell pm list packages | findstr datetime
# Should show: package:com.example.datetimechecker
```

## ⚡ Quick Start

### 1. Device Setup

```powershell
# Start Android emulator (từ Android Studio)
# Or kết nối physical device với USB debugging

# Verify device connection
adb devices
# Should show: emulator-5554    device
#          or: [DEVICE_ID]      device
```

### 2. Start Appium Server

```powershell
# Terminal 1: Start Appium server
appium --log-level info
# Server running on: http://localhost:4723
# Keep this terminal open
```

### 3. Launch DateTimeChecker App

```powershell
# Open app manually on device/emulator
# Or start via ADB:
adb shell am start -n com.example.datetimechecker/.MainActivity
```

### 4. Run Tests

```powershell
# Terminal 2: Run comprehensive test suite
npm run test:android-final

# Or debug UI structure first
npm run debug:android-ui
```

## 🧪 Test Scenarios

### Test Coverage Matrix

| Test # | Scenario        | Input        | Expected Result                          | Status |
| ------ | --------------- | ------------ | ---------------------------------------- | ------ |
| **1**  | UI Verification | N/A          | All elements found                       | ✅     |
| **2**  | Valid Date      | `15/08/2020` | "15/08/2020 is correct date time!"       | ✅     |
| **3**  | Invalid Date    | `32/01/2024` | "❌ Input data for Day is out of range!" | ✅     |
| **4**  | Time Input      | `14:30`      | Time accepted                            | ✅     |
| **5**  | Clear Button    | Click Clear  | Fields reset to placeholders             | ✅     |
| **6**  | Now Button      | Click Now    | Auto-fill current date                   | ✅     |

### Detailed Test Cases

#### 🔍 Test 1: UI Element Verification

```javascript
// Verify app title
const title = await driver.$(
  'android=new UiSelector().text("Date & Time Validator")'
);
console.log("Title found:", await title.isDisplayed());

// Verify input fields
const dateInput = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
);
const timeInput = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/timeInput")'
);

// Verify buttons
const checkButton = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/checkButton")'
);
const clearButton = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/clearButton")'
);
const nowButton = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/nowButton")'
);
```

#### 📅 Test 2: Valid Date Input

```javascript
// Input valid date
await dateInput.click();
await dateInput.clearValue();
await dateInput.setValue("15/08/2020");

// Click check button
await checkButton.click();
await driver.pause(2000); // Wait for result

// Verify success result
const result = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/resultText")'
);
const resultText = await result.getText();
console.log("Result:", resultText);
// Expected: "15/08/2020 is correct date time!"
```

#### ❌ Test 3: Invalid Date Input

```javascript
// Input invalid date (day > 31)
await dateInput.setValue("32/01/2024");
await checkButton.click();
await driver.pause(2000);

const result = await resultElement.getText();
// Expected: "❌ Input data for Day is out of range!"
```

#### ⏰ Test 4: Time Input

```javascript
// Test time field functionality
const timeInput = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/timeInput")'
);
await timeInput.setValue("14:30");
// Verify time accepted và app doesn't crash
```

#### 🧹 Test 5: Clear Button

```javascript
// Fill fields then clear
await dateInput.setValue("15/08/2020");
await timeInput.setValue("14:30");

// Click clear button
await clearButton.click();
await driver.pause(1000);

// Verify fields cleared
const dateValue = await dateInput.getText();
console.log("Date after clear:", dateValue);
// Expected: "dd/mm/yyyy" (placeholder)
```

#### 🕒 Test 6: Now Button

```javascript
// Click Now button
await nowButton.click();
await driver.pause(2000);

// Verify current date filled
const dateValue = await dateInput.getText();
console.log("Auto-filled date:", dateValue);
// Expected: Current date (e.g., "13/10/2025")
```

## 🔧 Technical Implementation

### WebDriverIO Configuration

```javascript
// Appium capabilities
const capabilities = {
  platformName: "Android",
  platformVersion: "16", // Adjust to your Android version
  deviceName: "Android Emulator",
  appPackage: "com.example.datetimechecker",
  appActivity: ".MainActivity",
  automationName: "UiAutomator2",
  noReset: true,
  fullReset: false,
  newCommandTimeout: 300000,
};

// WebDriverIO remote connection
const driver = await remote({
  protocol: "http",
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub",
  capabilities: capabilities,
});
```

### Element Selection Strategies

```javascript
// 1. Resource ID (most reliable)
const element = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")'
);

// 2. Text content (fallback)
const button = await driver.$('android=new UiSelector().text("Check")');

// 3. Class name + instance (last resort)
const input = await driver.$(
  'android=new UiSelector().className("android.widget.EditText").instance(0)'
);

// 4. Combined selectors
const specific = await driver.$(
  'android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput").className("android.widget.EditText")'
);
```

### UI Structure Discovery

```javascript
// Get complete app UI structure
const pageSource = await driver.getPageSource();
console.log("App UI Structure:", pageSource);

// Save to file for analysis
fs.writeFileSync("_output/android-ui-structure.xml", pageSource);

// Find clickable elements
const clickables = await driver.$$("android=new UiSelector().clickable(true)");
console.log(`Found ${clickables.length} clickable elements`);
```

### Session Management

```javascript
// Connection setup
async function setupDriver() {
  console.log("📱 Connecting to Android device via Appium...");
  const driver = await remote(capabilities);
  console.log("✅ Connected successfully!");
  return driver;
}

// Clean session teardown
async function teardownDriver(driver) {
  if (driver) {
    await driver.deleteSession();
    console.log("🔚 Session ended");
  }
}
```

## 🐛 Troubleshooting

### Common Issues & Solutions

#### ❌ "ADB not found"

```powershell
# Problem: 'adb' is not recognized as internal or external command
# Solution:
# 1. Find Android SDK path
dir "C:\Users\%USERNAME%\AppData\Local\Android\Sdk"

# 2. Add platform-tools to Windows PATH
# System Properties → Environment Variables → Path → Add:
# C:\Users\[USERNAME]\AppData\Local\Android\Sdk\platform-tools

# 3. Restart PowerShell completely
# 4. Test: adb devices
```

#### ❌ "No devices connected"

```powershell
# Problem: adb devices shows empty list
# Solutions:

# Option 1: Restart ADB service
adb kill-server
adb start-server
adb devices

# Option 2: Reconnect device
# - Unplug and replug USB cable
# - Enable USB debugging in Developer options
# - Accept RSA key fingerprint on device

# Option 3: Start emulator
# Android Studio → AVD Manager → Start emulator
```

#### ❌ "Appium connection failed"

```powershell
# Problem: WebDriverIO can't connect to Appium
# Solutions:

# 1. Check Appium server status
curl http://localhost:4723/status
# Should return JSON with server info

# 2. Start Appium with debug logging
appium --log-level debug --port 4723

# 3. Verify port not in use
netstat -ano | findstr :4723
# Kill process if port occupied
```

#### ❌ "App package not found"

```powershell
# Problem: com.example.datetimechecker not found
# Solutions:

# 1. Verify app installed
adb shell pm list packages | findstr datetime
# Should show: package:com.example.datetimechecker

# 2. Reinstall APK
adb uninstall com.example.datetimechecker
adb install path\to\DateTimeChecker.apk

# 3. Check app can launch
adb shell am start -n com.example.datetimechecker/.MainActivity
```

#### ❌ "Platform version mismatch"

```javascript
// Problem: Appium can't connect to device
// Solution: Adjust platform version in test script

// Before (incorrect):
platformVersion: "10.0";

// After (correct):
platformVersion: "16"; // Use actual Android API level
```

#### ❌ "Element not found"

```javascript
// Problem: UiSelector can't find elements
// Solutions:

// 1. Debug UI structure first
npm run debug:android-ui
// Check _output/android-ui-*.xml for actual resource IDs

// 2. Use multiple selector strategies
const element = await driver.$('android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")')
  || await driver.$('android=new UiSelector().text("dd/mm/yyyy")');

// 3. Add wait conditions
await driver.waitUntil(async () => {
  const el = await driver.$('android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")');
  return await el.isDisplayed();
}, { timeout: 10000 });
```

### Debug Commands

```powershell
# Get device info
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk

# Check app activity
adb shell dumpsys activity activities | findstr datetime

# View app logs
adb logcat | findstr DateTimeChecker

# Force stop/restart app
adb shell am force-stop com.example.datetimechecker
adb shell am start -n com.example.datetimechecker/.MainActivity

# Check Appium capabilities
curl -X POST http://localhost:4723/session \
  -H "Content-Type: application/json" \
  -d '{"desiredCapabilities": {"platformName": "Android"}}'
```

## 📊 Best Practices

### 🎯 Test Design Principles

1. **Resource ID Priority**: Always use resource IDs first, text selectors as fallback
2. **Wait Strategies**: Implement proper waits for element availability
3. **Session Management**: Clean setup and teardown for each test run
4. **Error Handling**: Comprehensive try-catch blocks với meaningful messages
5. **UI Discovery**: Debug UI structure before writing tests

### 🔧 Code Organization

```
📦 Mobile Testing Structure
├── 📁 scripts/
│   ├── final-android-test.cjs      # 🎯 Main comprehensive test
│   └── debug-android-ui.cjs        # 🔍 UI structure discovery
├── 📁 _output/
│   ├── android-ui-*.xml           # 📄 UI dumps for analysis
│   └── screenshots/               # 📸 Test failure captures
└── 📋 MOBILE_APP_TESTING.md       # 📚 This guide
```

### ⚡ Performance Optimization

```javascript
// Optimize test execution
const capabilities = {
  // Disable animations for faster testing
  "appium:disableAndroidWatchers": true,
  "appium:skipDeviceInitialization": true,

  // Faster element location
  "appium:newCommandTimeout": 300000,
  "appium:androidInstallTimeout": 90000,

  // Keep app state between tests
  noReset: true,
  fullReset: false,
};

// Efficient element waits
await driver.waitUntil(
  async () => {
    const element = await driver.$("selector");
    return await element.isDisplayed();
  },
  {
    timeout: 10000,
    timeoutMsg: "Element not found after 10s",
  }
);
```

### 🛡️ Error Prevention

```javascript
// Robust element interaction
async function safeClick(selector) {
  try {
    const element = await driver.$(selector);
    await element.waitForDisplayed({ timeout: 10000 });
    await element.click();
    return true;
  } catch (error) {
    console.log(`❌ Click failed for ${selector}:`, error.message);
    return false;
  }
}

// Retry mechanism
async function retryOperation(operation, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(`Retry ${i + 1}/${maxRetries} after error:`, error.message);
      await driver.pause(2000);
    }
  }
}
```

### 📈 Success Metrics

✅ **Test Execution Metrics**

- Connection time: < 10 seconds
- Element discovery: < 3 seconds per element
- Test completion: < 2 minutes total
- Success rate: > 95% on stable builds

✅ **Coverage Goals**

- All UI elements verified: 100%
- Input validation scenarios: 100%
- Button functionality: 100%
- Error handling paths: 100%
- Session management: 100%

---

**🎓 Mobile App Testing Guide**  
**📱 Real Android Device Testing**: WebDriverIO + Appium + UiAutomator2  
**🏫 FPT University** - Software Testing Course - October 2025

---

## 📞 Support & Resources

### Documentation Links

- [WebDriverIO Android Testing](https://webdriver.io/docs/api/appium)
- [Appium UiAutomator2](http://appium.io/docs/en/drivers/android-uiautomator2/)
- [Android ADB Reference](https://developer.android.com/studio/command-line/adb)

### Troubleshooting Checklist

- [ ] ADB in PATH và `adb devices` shows connected device
- [ ] Appium server running on http://localhost:4723
- [ ] DateTimeChecker app installed và can launch manually
- [ ] Resource IDs match app implementation
- [ ] Platform version correct in test script
- [ ] No port conflicts (4723, other Appium instances)

### Quick Test Commands

```powershell
# Full test validation
npm run test:android-final     # Complete test suite
npm run debug:android-ui       # UI structure discovery
adb devices                    # Verify device connection
curl http://localhost:4723/status  # Check Appium status
```
