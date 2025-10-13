# 📱 DateTimeChecker Android Testing Framework# 📱 DateTimeChecker Android Testing Framework

**Automated testing for real Android DateTimeChecker app** built with Android Studio using direct WebDriverIO + Appium approach.**Automated testing for real Android DateTimeChecker app** built with Android Studio using direct WebDriverIO + Appium approach.

## 🎯 Project Overview## 🚀 Quick Start## 🚀 Live Demo

Testing framework for Android DateTimeChecker app with real device interaction, UI validation, and comprehensive functionality testing.### Prerequisites**🌐 Production**: [https://dtchman.netlify.app](https://dtchman.netlify.app)

**🔗 Related Web App**: [Date & Time Validator](https://dtchman.netlify.app)1. **Android Studio** với DateTimeChecker app đã build## ✨ Tính Năng Chính

## 🚀 Quick Start2. **Android Device/Emulator** kết nối và app đang chạy

### Prerequisites3. **ADB** trong PATH (Android SDK platform-tools)### 📅 **Date & Time Validation**

1. **Android Studio** với DateTimeChecker app đã build4. **Appium** và UiAutomator2 driver đã cài

2. **Android Device/Emulator** kết nối và app đang chạy

3. **ADB** trong PATH (Android SDK platform-tools) - **Format**: `dd/mm/yyyy` với calendar picker

4. **Appium** và UiAutomator2 driver đã cài

### Setup & Run- **Real-time Validation**: Phản hồi tức thời với thông báo lỗi chi tiết

### Setup & Run

- **Leap Year**: Xử lý năm nhuận chính xác theo lịch Gregorian

``````bash

# 1. Setup ADB (chỉ cần chạy 1 lần)`````bash- **Timezone Support**: 8 múi giờ chính với chuyển đổi trực tiếp

.\setup-adb.bat

# 1. Setup ADB (chỉ cần chạy 1 lần)

# 2. Đảm bảo device connected

adb devices.\setup-adb.bat### � **4 Loại Testing Hoàn Chỉnh**



# 3. Start Appium server

appium --log-level info

# 2. Đảm bảo device connected1. **🖥️ E2E Testing**: Desktop browser automation (CodeceptJS + Playwright)

# 4. Mở DateTimeChecker app trên device/emulator

adb devices2. **🔌 API Testing**: Direct HTTP requests đến backend endpoints

# 5. Chạy Android tests

npm run test:android-final3. **📱 Mobile Web Testing**: Browser emulation với viewport + user agent mobile

``````

# 3. Mở DateTimeChecker app trên device/emulator4. **📲 Mobile App Testing**: Real Android device/emulator (Appium)

## 📱 Android App Testing

### Current Implementation

- **Framework**: Direct WebDriverIO + Appium (bypasses CodeceptJS for Android compatibility)# 4. Chạy Android tests### 🤖 **AI-Powered Test Generation**

- **Target**: Real Android DateTimeChecker app (`com.example.datetimechecker`)

- **Device**: Android emulator (`emulator-5554`) or physical devicenpm run test:android

- **Approach**: Direct element interaction using resource IDs

````- **Natural Language**: Tạo tests bằng tiếng Việt/English

### Test Coverage ✅

- **OpenAI GPT-4o-mini**: Phân tích results và tạo code tự động

| Test Case | Description | Expected Result |

|-----------|-------------|-----------------|## 🧪 Test Cases- **Smart Generation**: Convert mô tả → CodeceptJS scenarios ready-to-use

| **UI Verification** | Verify all app elements exist | Title, input fields, buttons found |

| **Valid Date Input** | Input `15/08/2020` and check | "15/08/2020 is correct date time!" |

| **Invalid Date Input** | Input `32/01/2024` and check | "❌ Input data for Day is out of range!" |

| **Time Input** | Input `14:30` in time field | Time accepted and processed |### ✅ Android App Tests## 🛠️ Cài Đặt & Setup

| **Clear Button** | Click clear to reset fields | Fields return to `dd/mm/yyyy` placeholder |

| **Now Button** | Click to auto-fill current date | Current date filled (e.g., `13/10/2025`) |



## 🧪 Test Scripts1. **App Launch Test**### Yêu Cầu Hệ Thống



### 🎯 Main Test Commands   - Verify DateTimeChecker app khởi động thành công



```bash   - Kiểm tra UI elements hiển thị đúng- **Node.js** >= 16.0.0

# Complete test suite (recommended)

npm run test:android-final- **npm** >= 8.0.0



# Debug UI structure2. **Valid Date Input Test**- **Windows** PowerShell (đã test trên Windows 11)

npm run debug:android-ui

   - Nhập date hợp lệ: `15/08/2020`

# Individual testing approaches

npm run test:android-direct   - Tap Check button### 1. **Clone & Install**

npm run test:android-datepicker

```   - Verify success message: "15/08/2020 is correct date time!"



### 📋 Script Details```powershell



| Script | Purpose | Output |3. **Invalid Date Input Test**# Clone repository

|--------|---------|---------|

| `test:android-final` | Comprehensive 6-test suite | Full functionality validation |   - Nhập date không hợp lệ: `32/01/2024`git clone https://github.com/amberr147/DTC_AI_Testing-.git

| `debug:android-ui` | UI structure discovery | XML files in `_output/` directory |

| `test:android-direct` | Basic connection test | WebDriverIO connection verification |   - Tap Check buttoncd DTC_AI_Testing

| `test:android-datepicker` | DatePicker-specific test | Legacy approach (deprecated) |

   - Verify error message: "Input data for Day is out of range!"

## 🔧 Technical Stack

# Cài dependencies

- **WebDriverIO** 9.20.0 - Direct Android automation

- **Appium** 3.1.0 - Mobile app automation server## 🔧 Technical Stacknpm install

- **UiAutomator2** 5.0.5 - Android UI automation driver

- **Android SDK** - ADB và platform-tools

- **Node.js** - Runtime environment

- **CodeceptJS** 3.7.5 - Test automation framework# Setup Playwright browsers (lần đầu tiên)

## 📱 Android App Requirements

- **Appium** 3.1.0 - Mobile app automationnpm run setup:e2e

Your DateTimeChecker Android app should have these resource IDs:

- **UiAutomator2** - Android UI automation driver```

```xml

<!-- Required UI Elements -->- **Android SDK** - ADB và platform-tools

<EditText android:id="@+id/dateInput" />      <!-- Date input field -->

<EditText android:id="@+id/timeInput" />      <!-- Time input field -->### 2. **Environment Setup**

<Button android:id="@+id/checkButton" />      <!-- Validate button -->

<Button android:id="@+id/clearButton" />      <!-- Clear fields button -->## 📱 App Requirements

<Button android:id="@+id/nowButton" />        <!-- Auto-fill now button -->

<TextView android:id="@+id/resultText" />     <!-- Result display -->Tạo file `.env` trong thư mục gốc:

````

Your DateTimeChecker Android app should have:

**Package Details:**

- Package name: `com.example.datetimechecker`- Package name: `com.example.datetimechecker````env

- Main activity: `.MainActivity`

- Platform: Android API 16+ (tested with Android emulator)- Main activity: `.MainActivity`# OpenAI API Key (cho AI test generation)

## 🔍 Element Discovery & Selection- EditText field for date inputOPENAI_API_KEY=your_openai_api_key_here

Tests use multiple selector strategies for robust element detection:- Button with text "Check"

```javascript- TextView showing validation results# App URLs

// Primary: Resource ID selector (most reliable)

const dateInput = await driver.$('android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")');APP_URL=http://localhost:3000



// Fallback: Text-based selector  ## 🔍 Selectors UsedAPI_URL=http://localhost:8080

const checkButton = await driver.$('android=new UiSelector().text("Check")');

```

// UI structure debugging

const pageSource = await driver.getPageSource();Tests use multiple selector strategies:

console.log('App UI Structure:', pageSource);

````````javascript### 3. **Start Development**



## 📊 Test Results// By text content



Last successful test run:I.waitForElement("Date & Time Validator", 10);```powershell



```# Terminal 1: Start React app

🎉 All DateTimeChecker App tests completed!

// By hint textnpm start

📋 Test Summary:

   ✅ App connection successfulI.fillField("Enter date (dd/mm/yyyy)", "15/08/2020");# Opens http://localhost:3000

   ✅ UI elements verified

   ✅ Valid date input tested - "15/08/2020 is correct date time!"

   ✅ Invalid date input tested - "❌ Input data for Day is out of range!"

   ✅ Time input tested - 14:30 format accepted// By UiSelector (fallback)# Terminal 2: Start API server

   ✅ Clear button tested - Fields reset to dd/mm/yyyy

   ✅ Now button tested - Auto-filled "13/10/2025"I.fillField({npm run start:api



🔚 Session ended  android: 'new UiSelector().className("android.widget.EditText").instance(0)'# API running on http://localhost:8080

```

}, "15/08/2020");```

## 📂 Project Structure

````

```

📦 DTC_AI_Testing/## 🧪 4 Loại Testing Commands

├── 📁 scripts/

│   ├── final-android-test.cjs      # ✅ Main comprehensive test## 📂 Project Structure

│   ├── debug-android-ui.cjs        # 🔍 UI structure discovery

│   ├── direct-android-test.cjs     # 🔗 Basic connection test### **🖥️ 1. Desktop E2E Testing**

│   └── direct-android-datepicker-test.cjs # ❌ Legacy approach

├── 📁 _output/                     # XML UI dumps & screenshots```````

├── 📁 tests/

│   └── dateTimeChecker_test.js     # CodeceptJS scenarios (for reference)📦 DTC_AI_Testing/```powershell

├── setup-adb.bat                  # ADB setup automation

├── codecept.android.conf.cjs       # CodeceptJS config (unused)├── 📁 tests/# E2E testing trên desktop browser

└── package.json                   # NPM scripts & dependencies

```│   └── dateTimeChecker_test.js     # Android app test scenariosnpm run test:e2e



## 🐛 Troubleshooting├── 📁 scripts/# Playwright automation: Chrome/Firefox/Safari/Edge



### Common Issues & Solutions│   └── codecept-android.cjs        # Android test runner script# Auto screenshot on failures → ./output/



#### **ADB not found**├── 📁 output/                      # Screenshots & test reports```

```bash

# Find Android SDK path├── codecept.android.conf.cjs       # Appium configuration

dir "C:\Users\%USERNAME%\AppData\Local\Android\Sdk"

├── setup-adb.bat                   # ADB setup script### **🔌 2. API Testing**

# Add platform-tools to PATH

set PATH=%PATH%;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools└── package.json                    # NPM scripts



# Verify ADB works``````powershell

adb devices

```# Direct HTTP requests đến backend API



#### **No devices connected**## ⚡ NPM Scriptsnpm run test:api

```bash

# Restart ADB service# Test validation rules: day/month/year ranges

adb kill-server

adb start-server```json# Response format và error messages

adb devices

{```

# Should show: emulator-5554 device

```  "test:android": "node scripts/codecept-android.cjs"



#### **App not found**}### **📱 3. Mobile Web Testing**

```bash

# Verify app is installed```````

adb shell pm list packages | findstr datetime

````powershell

# Should show: package:com.example.datetimechecker

```## 🔧 Configuration# Browser emulation với mobile viewport



#### **Appium connection failed**npm run test:mobile

```bash

# Start Appium server manually with debug### Appium Config (`codecept.android.conf.cjs`)# Viewport: 390x844 (Android phone size)

appium --log-level debug --port 4723

```javascript# User Agent: Android Chrome Mobile

# Check server status

curl http://localhost:4723/statushelpers: {# Touch events enabled

```

  Appium: {```

#### **Platform version mismatch**

```javascript    platform: 'Android',

// In test script, adjust platform version:

platformVersion: '16'  // Not '10.0'    appPackage: 'com.example.datetimechecker',### **📲 4. Mobile App Testing**

```

    appActivity: '.MainActivity',

### Debug Commands

    host: 'localhost',```powershell

```bash

# Get detailed device info      port: 4723,# Real Android device/emulator testing

adb shell getprop ro.build.version.release

    desiredCapabilities: {npm run test:mobile-app

# Check app activity

adb shell dumpsys activity activities | findstr datetime      platformName: 'Android',# Requires: Android SDK + ADB setup



# Force stop app (if needed)      automationName: 'UiAutomator2',# Auto-detects connected devices

adb shell am force-stop com.example.datetimechecker

      noReset: true# Shows setup instructions if not ready

# Restart app

adb shell am start -n com.example.datetimechecker/.MainActivity    }```

```

  }

## 🎯 Success Criteria

}### **🤖 5. AI Test Generation**

### ✅ Validation

````

1. **Connection**: WebDriverIO successfully connects to Android device

2. **App Launch**: DateTimeChecker app opens and responds````powershell

3. **UI Elements**: All 6 resource IDs found and accessible

4. **Date Validation**: ## 🐛 Troubleshooting# Generate tests từ natural language

   - Valid dates return success messages

   - Invalid dates return appropriate error messagesnpm run generate:tests "tạo 3 test cases cho leap year"

5. **Button Functions**: Clear and Now buttons work as expected

6. **Session Management**: Clean connection setup and teardown### ADB not foundnpm run generate:tests "write test for invalid month validation"



### 📸 Evidence```bash



Tests automatically capture:# Tìm Android SDK# AI-powered test analysis (experimental)

- Page source XML for UI verification

- Element interaction logsdir "C:\Users\%USERNAME%\AppData\Local\Android\Sdk"npm run test:ai

- Success/failure status for each test step

- Session connection details````



---# Add platform-tools to PATH



**🎓 Android Testing Framework**  set PATH=%PATH%;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools### **⚡ Development Scripts**

**📱 Real Device Testing**: Direct WebDriverIO + Appium

**🏫 FPT University** - Software Testing Course - October 2025````

```powershell

### No devices connectednpm start              # React dev server (http://localhost:3000)

```bashnpm run start:api      # API server (http://localhost:8080)

# Restart ADBnpm test               # Unit tests (Jest)

adb kill-servernpm run build          # Production build

adb start-server```

adb devices

```## 📁 Project Structure



### App not found```

- Đảm bảo DateTimeChecker app đã được install từ Android Studio📦 DTC_AI_Testing/

- Check package name: `adb shell pm list packages | findstr datetime`├── 🎯 src/                           # React Application

│   ├── components/

### Appium connection failed│   │   ├── DateTimeChecker.jsx      # Main UI component

```bash│   │   ├── DateTimeValidator.js     # Validation logic

# Start Appium server manually│   │   └── DateTimeChecker.css      # Styling

appium --log-level debug│   ├── App.js                       # Root component

```│   └── index.js                     # Entry point

├── � tests/                        # All Test Files

## 📊 Test Results│   └── dateTimeChecker_test.js     # E2E/API/Mobile tests

├── 🤖 scripts/                      # Testing Scripts

Tests tạo screenshots tự động:│   ├── codecept-api.js             # API testing runner

- `android_app_launched.png` - App startup verification│   ├── codecept-mobile.js          # Mobile web testing

- `android_valid_date_result.png` - Valid input result│   ├── codecept-mobile-app.js      # Mobile app testing

- `android_invalid_date_result.png` - Invalid input result│   └── ai-test-generator.js        # AI test generation

├── ⚙️ Configuration Files

## 🎯 Success Criteria│   ├── codecept.conf.cjs           # CodeceptJS config (CommonJS)

│   ├── steps_file.cjs              # CodeceptJS steps

✅ All 3 Android test scenarios pass│   ├── server.js                   # API server (Express)

✅ App responds correctly to date validation│   └── .env                        # Environment variables

✅ Screenshots captured for verification├── 📦 Dependencies

✅ UiAutomator2 selectors work reliably│   ├── package.json                # npm packages & scripts

│   └── node_modules/               # Installed packages

---├── 📄 output/                      # Test Results

│   ├── *.png                      # Screenshots from failed tests

**Note**: Đây là testing trên **thiết bị Android thật** hoặc **emulator**, không phải web mobile simulation.│   └── test-reports/              # Test execution logs
└── 📚 Documentation
    ├── README.md                  # This file
    ├── CODE_ARCHITECTURE.md       # Technical docs
    └── TESTING_GUIDE.md           # Testing instructions
````

## 🎯 Validation Rules & Test Examples

### **📅 Date Format Rules**

- **Valid**: `dd/mm/yyyy` (15/08/2020, 29/02/2024)
- **Day range**: 1-31 (kiểm tra theo tháng và leap year)
- **Month range**: 1-12
- **Year range**: 1000-3000

### **✅ Valid Test Cases**

```
Input: "15/08/2020" → "15/08/2020 is correct date time!"
Input: "29/02/2024" → "29/02/2024 is correct date time!" (leap year)
Input: "31/12/3000" → "31/12/3000 is correct date time!" (max year)
```

### **❌ Invalid Test Cases**

```
Input: "32/01/2024" → "Input data for Day is out of range!"
Input: "15/13/2024" → "Input data for Month is out of range!"
Input: "15/08/99"   → "Input data for Year is out of range!"
Input: "30/02/2024" → "30/02/2024 is NOT correct date time!" (calendar validation)
```

### **🤖 AI Test Generation Examples**

```powershell
npm run generate:tests "viết test cho năm nhuận"
npm run generate:tests "create tests for invalid month validation"
npm run generate:tests "tạo 3 test cases mobile cho ngày hợp lệ"
```

## 🔧 Technical Stack

### **🏗️ Frontend Stack**

- **Framework**: React 18.2.0 + Hooks
- **Styling**: CSS3 với Glass-morphism effects
- **Build Tool**: Create React App 5.0.1
- **Dev Server**: http://localhost:3000

### **🧪 Testing Technologies**

- **E2E Framework**: CodeceptJS 3.7.5 + Playwright 1.56.0
- **Mobile Testing**: Browser emulation + Appium (mobile app)
- **API Testing**: REST helper cho HTTP requests
- **AI Integration**: OpenAI GPT-4o-mini
- **Unit Testing**: Jest + React Testing Library
- **Assertion Library**: codeceptjs-chai

### **🔌 Backend & API**

- **API Server**: Express.js (Node.js)
- **Endpoint**: POST `/api/validate`
- **Response Format**: JSON `{ message: "validation result" }`
- **CORS**: Enabled cho development

### **📱 Mobile Testing Setup**

- **Web Mobile**: Playwright với viewport 390x844, Android user agent
- **App Mobile**: Appium + UiAutomator2 (Android SDK required)
- **Screenshot**: Auto-capture trên test failures
- **Devices**: Real devices hoặc Android emulator

### **🤖 AI Features**

- **Model**: OpenAI GPT-4o-mini (cost-effective)
- **Input**: Natural language (Vietnamese/English)
- **Output**: Ready-to-use CodeceptJS scenarios
- **Local Processing**: Không cần cloud dependencies ngoài OpenAI API

## 🚀 Live Application

**🌐 Production**: [https://dtchman.netlify.app](https://dtchman.netlify.app)

- Auto-deploy from main branch
- Optimized React build (47.16KB gzipped)

## 📚 Documentation

- **`CODE_ARCHITECTURE.md`**: Technical setup & AI integration guide
- **`TESTING_GUIDE.md`**: Complete testing documentation
- **`.env`**: Environment configuration (OpenAI API key required)

## 📄 License

MIT License - Educational use for FPT University Software Testing Course.

## 🚀 Troubleshooting & Setup Issues

### **🔧 Common Setup Problems**

#### **Problem 1: Mobile App Testing - ADB not found**

```powershell
# Error: 'adb' is not recognized
# Solution: Install Android Studio + Setup PATH

# 1. Download Android Studio: https://developer.android.com/studio
# 2. Add to Windows PATH:
#    C:\Users\[USERNAME]\AppData\Local\Android\Sdk\platform-tools
# 3. Restart PowerShell completely
# 4. Test: adb devices
```

#### **Problem 2: Playwright browsers not installed**

```powershell
# Error: Browser not found
npm run setup:e2e  # Install Playwright browsers
```

#### **Problem 3: OpenAI API key missing**

```powershell
# Error: No OPENAI_API_KEY found
# Add to .env file:
OPENAI_API_KEY=your_actual_api_key_here
```

#### **Problem 4: Port conflicts**

```powershell
# Error: Port 3000/8080 already in use
# Kill processes:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

### **✅ Verify Setup**

```powershell
# Test all components:
npm install                    # ✓ Dependencies
npm run setup:e2e             # ✓ Playwright browsers
npm start                     # ✓ React app (localhost:3000)
npm run start:api             # ✓ API server (localhost:8080)
npm run test:e2e              # ✓ Desktop E2E tests
npm run test:api              # ✓ API tests
npm run test:mobile           # ✓ Mobile web tests
npm run test:mobile-app       # ✓ Mobile app setup check
```

---

**🎓 Date & Time Validator - Complete AI Testing Suite**
**🚀 4 Testing Types**: E2E + API + Mobile Web + Mobile App + AI Generation
**📅 October 2025** - FPT University Software Testing Course
````````
