# 📱 DateTimeChecker - Complete Testing Suite# 📱 DateTimeChecker Android Testing Framework# 📱 DateTimeChecker Android Testing Framework

**Advanced testing framework** với 4 loại testing: **E2E, API, Mobile App** và **AI-powered test generation** cho Date Time Checker application.**Automated testing for real Android DateTimeChecker app** built with Android Studio using direct WebDriverIO + Appium approach.**Automated testing for real Android DateTimeChecker app** built with Android Studio using direct WebDriverIO + Appium approach.

## 🎯 Project Overview## 🎯 Project Overview## 🚀 Quick Start## 🚀 Live Demo

Multi-testing approach cho Date & Time Validator app:Testing framework for Android DateTimeChecker app with real device interaction, UI validation, and comprehensive functionality testing.### Prerequisites**🌐 Production**: [https://dtchman.netlify.app](https://dtchman.netlify.app)

- **🖥️ E2E Testing**: Desktop browser automation (CodeceptJS + Playwright) **🔗 Related Web App**: [Date & Time Validator](https://dtchman.netlify.app)1. **Android Studio** với DateTimeChecker app đã build## ✨ Tính Năng Chính

- **🔌 API Testing**: Direct HTTP requests với validation endpoints

- **📱 Mobile App Testing**: Real Android device testing (WebDriverIO + Appium)## 🚀 Quick Start2. **Android Device/Emulator** kết nối và app đang chạy

- **🤖 AI Testing**: OpenAI-powered test case generation

### Prerequisites3. **ADB** trong PATH (Android SDK platform-tools)### 📅 **Date & Time Validation**

**🌐 Live Demo**: [https://dtchman.netlify.app](https://dtchman.netlify.app)

1. **Android Studio** với DateTimeChecker app đã build4. **Appium** và UiAutomator2 driver đã cài

## 🚀 Quick Start

2. **Android Device/Emulator** kết nối và app đang chạy

### System Requirements

- **Node.js** >= 16.0.03. **ADB** trong PATH (Android SDK platform-tools) - **Format**: `dd/mm/yyyy` với calendar picker

- **npm** >= 8.0.0

- **Windows** PowerShell (tested on Windows 11)4. **Appium** và UiAutomator2 driver đã cài

### 1. Installation### Setup & Run- **Real-time Validation**: Phản hồi tức thời với thông báo lỗi chi tiết

```````powershell### Setup & Run

# Clone repository

git clone https://github.com/amberr147/DTC_AI_Testing-.git- **Leap Year**: Xử lý năm nhuận chính xác theo lịch Gregorian

cd DTC_AI_Testing

``````bash

# Install dependencies

npm install# 1. Setup ADB (chỉ cần chạy 1 lần)`````bash- **Timezone Support**: 8 múi giờ chính với chuyển đổi trực tiếp



# Setup E2E browsers (one-time).\setup-adb.bat

npm run setup:e2e

```# 1. Setup ADB (chỉ cần chạy 1 lần)



### 2. Environment Setup# 2. Đảm bảo device connected



Create `.env` file:adb devices.\setup-adb.bat### � **4 Loại Testing Hoàn Chỉnh**



```env

# OpenAI API Key (for AI test generation)

OPENAI_API_KEY=your_openai_api_key_here# 3. Start Appium server



# App URLsappium --log-level info

APP_URL=http://localhost:3000

API_URL=http://localhost:8080# 2. Đảm bảo device connected1. **🖥️ E2E Testing**: Desktop browser automation (CodeceptJS + Playwright)

```````

# 4. Mở DateTimeChecker app trên device/emulator

### 3. Start Applications

adb devices2. **🔌 API Testing**: Direct HTTP requests đến backend endpoints

```````powershell

# Terminal 1: Start React app# 5. Chạy Android tests

npm start

# Runs on http://localhost:3000npm run test:android-final3. **📱 Mobile Web Testing**: Browser emulation với viewport + user agent mobile



# Terminal 2: Start API server  ``````

npm run start:api

# API on http://localhost:8080# 3. Mở DateTimeChecker app trên device/emulator4. **📲 Mobile App Testing**: Real Android device/emulator (Appium)

```````

## 📱 Android App Testing

## 🧪 Testing Commands

### Current Implementation

### **🖥️ Desktop E2E Testing**

- **Framework**: Direct WebDriverIO + Appium (bypasses CodeceptJS for Android compatibility)# 4. Chạy Android tests### 🤖 **AI-Powered Test Generation**

`````powershell

# E2E testing on desktop browsers- **Target**: Real Android DateTimeChecker app (`com.example.datetimechecker`)

npm run test:e2e

# Playwright automation: Chrome/Firefox/Safari/Edge- **Device**: Android emulator (`emulator-5554`) or physical devicenpm run test:android

# Auto screenshot on failures → ./output/

```- **Approach**: Direct element interaction using resource IDs



### **🔌 API Testing**````- **Natural Language**: Tạo tests bằng tiếng Việt/English



```powershell  ### Test Coverage ✅

# Direct HTTP requests to backend API

npm run test:api- **OpenAI GPT-4o-mini**: Phân tích results và tạo code tự động

# Test validation rules: day/month/year ranges

# Response format and error messages| Test Case | Description | Expected Result |

`````

|-----------|-------------|-----------------|## 🧪 Test Cases- **Smart Generation**: Convert mô tả → CodeceptJS scenarios ready-to-use

### **📱 Mobile App Testing**

| **UI Verification** | Verify all app elements exist | Title, input fields, buttons found |

````powershell

# Real Android device/emulator testing  | **Valid Date Input** | Input `15/08/2020` and check | "15/08/2020 is correct date time!" |

npm run test:android-final

# Requires: Android SDK + ADB setup| **Invalid Date Input** | Input `32/01/2024` and check | "❌ Input data for Day is out of range!" |

# Complete guide: MOBILE_APP_TESTING.md

```| **Time Input** | Input `14:30` in time field | Time accepted and processed |### ✅ Android App Tests## 🛠️ Cài Đặt & Setup



### **🤖 AI Test Generation**| **Clear Button** | Click clear to reset fields | Fields return to `dd/mm/yyyy` placeholder |



```powershell| **Now Button** | Click to auto-fill current date | Current date filled (e.g., `13/10/2025`) |

# Generate tests from natural language

npm run generate:tests "tạo 3 test cases cho leap year"

npm run generate:tests "write test for invalid month validation"

# AI-powered test analysis with OpenAI GPT-4o-mini## 🧪 Test Scripts1. **App Launch Test**### Yêu Cầu Hệ Thống

````

## 📱 Mobile App Testing

### 🎯 Main Test Commands - Verify DateTimeChecker app khởi động thành công

**📋 Complete Setup Guide**: See [`MOBILE_APP_TESTING.md`](./MOBILE_APP_TESTING.md)

### Quick Mobile Setup

````bash - Kiểm tra UI elements hiển thị đúng- **Node.js** >= 16.0.0

```powershell

# 1. Setup ADB# Complete test suite (recommended)

.\setup-adb.bat

npm run test:android-final- **npm** >= 8.0.0

# 2. Connect Android device/emulator

adb devices



# 3. Start Appium server# Debug UI structure2. **Valid Date Input Test**- **Windows** PowerShell (đã test trên Windows 11)

appium --log-level info

npm run debug:android-ui

# 4. Run comprehensive Android tests

npm run test:android-final   - Nhập date hợp lệ: `15/08/2020`

````

# Individual testing approaches

### Mobile Test Coverage ✅

npm run test:android-direct - Tap Check button### 1. **Clone & Install**

| Test Case | Status | Description |

|-----------|--------|-------------|npm run test:android-datepicker

| **UI Verification** | ✅ | All app elements detected |

| **Valid Date** | ✅ | `15/08/2020` → Success message |``` - Verify success message: "15/08/2020 is correct date time!"

| **Invalid Date** | ✅ | `32/01/2024` → Error message |

| **Time Input** | ✅ | `14:30` format acceptance |

| **Clear Button** | ✅ | Fields reset functionality |

| **Now Button** | ✅ | Auto-fill current date |### 📋 Script Details```powershell

## 🔧 Technical Stack

### **Frontend**| Script | Purpose | Output |3. **Invalid Date Input Test**# Clone repository

- **React** 18.2.0 + Hooks

- **CSS3** với Glass-morphism effects|--------|---------|---------|

- **Create React App** 5.0.1

| `test:android-final` | Comprehensive 6-test suite | Full functionality validation | - Nhập date không hợp lệ: `32/01/2024`git clone https://github.com/amberr147/DTC_AI_Testing-.git

### **Testing Technologies**

- **CodeceptJS** 3.7.5 + Playwright 1.56.0 (E2E)| `debug:android-ui` | UI structure discovery | XML files in `_output/` directory |

- **WebDriverIO** 9.20.0 + Appium 3.1.0 (Mobile)

- **OpenAI** GPT-4o-mini (AI generation)| `test:android-direct` | Basic connection test | WebDriverIO connection verification | - Tap Check buttoncd DTC_AI_Testing

- **Jest** + React Testing Library (Unit tests)

| `test:android-datepicker` | DatePicker-specific test | Legacy approach (deprecated) |

### **Backend & API**

- **Express.js** API server - Verify error message: "Input data for Day is out of range!"

- **Endpoint**: POST `/api/validate`

- **JSON** response format## 🔧 Technical Stack

- **CORS** enabled for development

# Cài dependencies

## 📂 Project Structure

- **WebDriverIO** 9.20.0 - Direct Android automation

`````

📦 DTC_AI_Testing/- **Appium** 3.1.0 - Mobile app automation server## 🔧 Technical Stacknpm install

├── 🎯 src/                           # React Application

│   ├── components/- **UiAutomator2** 5.0.5 - Android UI automation driver

│   │   ├── DateTimeChecker.jsx      # Main UI component

│   │   ├── DateTimeValidator.js     # Validation logic- **Android SDK** - ADB và platform-tools

│   │   └── DateTimeChecker.css      # Styling

│   └── App.js                       # Root component- **Node.js** - Runtime environment

├── 🧪 tests/                        # All Test Files

│   └── dateTimeChecker_test.js     # E2E/API test scenarios- **CodeceptJS** 3.7.5 - Test automation framework# Setup Playwright browsers (lần đầu tiên)

├── 🤖 scripts/                      # Testing Scripts

│   ├── ai-test-generator.js        # AI test generation## 📱 Android App Requirements

│   ├── codecept-api.js             # API testing runner

│   ├── codecept-ai.js              # AI-enhanced testing- **Appium** 3.1.0 - Mobile app automationnpm run setup:e2e

│   ├── final-android-test.cjs      # Mobile app testing

│   └── debug-android-ui.cjs        # Mobile UI discoveryYour DateTimeChecker Android app should have these resource IDs:

├── ⚙️ Configuration Files

│   ├── codecept.conf.cjs           # CodeceptJS config- **UiAutomator2** - Android UI automation driver```

│   ├── server.js                   # API server

│   └── .env                        # Environment variables```xml

├── 📄 output/                       # Test Results

│   ├── *.png                       # Screenshots from failures<!-- Required UI Elements -->- **Android SDK** - ADB và platform-tools

│   └── _output/                     # Mobile UI dumps

└── 📚 Documentation<EditText android:id="@+id/dateInput" />      <!-- Date input field -->

    ├── README.md                    # This file

    ├── MOBILE_APP_TESTING.md        # Complete mobile guide<EditText android:id="@+id/timeInput" />      <!-- Time input field -->### 2. **Environment Setup**

    └── CODE_ARCHITECTURE.md         # Technical documentation

```<Button android:id="@+id/checkButton" />      <!-- Validate button -->



## 🎯 Validation Rules & Examples<Button android:id="@+id/clearButton" />      <!-- Clear fields button -->## 📱 App Requirements



### **📅 Date Format Rules**<Button android:id="@+id/nowButton" />        <!-- Auto-fill now button -->

- **Valid**: `dd/mm/yyyy` (15/08/2020, 29/02/2024)

- **Day range**: 1-31 (depends on month and leap year)<TextView android:id="@+id/resultText" />     <!-- Result display -->Tạo file `.env` trong thư mục gốc:

- **Month range**: 1-12

- **Year range**: 1000-3000````



### **✅ Valid Test Cases**Your DateTimeChecker Android app should have:

`````

Input: "15/08/2020" → "15/08/2020 is correct date time!"**Package Details:**

Input: "29/02/2024" → "29/02/2024 is correct date time!" (leap year)

Input: "31/12/3000" → "31/12/3000 is correct date time!" (max year)- Package name: `com.example.datetimechecker`- Package name: `com.example.datetimechecker````env

````

- Main activity: `.MainActivity`

### **❌ Invalid Test Cases**

```- Platform: Android API 16+ (tested with Android emulator)- Main activity: `.MainActivity`# OpenAI API Key (cho AI test generation)

Input: "32/01/2024" → "Input data for Day is out of range!"

Input: "15/13/2024" → "Input data for Month is out of range!"  ## 🔍 Element Discovery & Selection- EditText field for date inputOPENAI_API_KEY=your_openai_api_key_here

Input: "15/08/99"   → "Input data for Year is out of range!"

Input: "30/02/2024" → "30/02/2024 is NOT correct date time!"Tests use multiple selector strategies for robust element detection:- Button with text "Check"

````

````javascript- TextView showing validation results# App URLs

## 🐛 Troubleshooting

// Primary: Resource ID selector (most reliable)

### **Common Issues**

const dateInput = await driver.$('android=new UiSelector().resourceId("com.example.datetimechecker:id/dateInput")');APP_URL=http://localhost:3000

#### **Mobile App Testing - ADB not found**

```powershell

# Error: 'adb' is not recognized

# Solution:// Fallback: Text-based selector  ## 🔍 Selectors UsedAPI_URL=http://localhost:8080

# 1. Install Android Studio

# 2. Add to PATH: C:\Users\[USERNAME]\AppData\Local\Android\Sdk\platform-toolsconst checkButton = await driver.$('android=new UiSelector().text("Check")');

# 3. Restart PowerShell

# 4. Test: adb devices```

````

// UI structure debugging

#### **Playwright browsers not installed**

```powershellconst pageSource = await driver.getPageSource();Tests use multiple selector strategies:

# Error: Browser not found

npm run setup:e2e  # Install Playwright browsersconsole.log('App UI Structure:', pageSource);

```

````````javascript### 3. **Start Development**

#### **OpenAI API key missing**

```powershell

# Error: No OPENAI_API_KEY found

# Add to .env file: OPENAI_API_KEY=your_actual_key## 📊 Test Results// By text content

```



### **Verify Complete Setup**

Last successful test run:I.waitForElement("Date & Time Validator", 10);```powershell

```powershell

# Test all components:

npm install                    # ✓ Dependencies

npm run setup:e2e             # ✓ Playwright browsers  ```# Terminal 1: Start React app

npm start                     # ✓ React app (localhost:3000)

npm run start:api             # ✓ API server (localhost:8080)🎉 All DateTimeChecker App tests completed!

npm run test:e2e              # ✓ Desktop E2E tests

npm run test:api              # ✓ API tests// By hint textnpm start

npm run test:android-final    # ✓ Mobile app tests (requires setup)

```📋 Test Summary:



## 📚 Documentation   ✅ App connection successfulI.fillField("Enter date (dd/mm/yyyy)", "15/08/2020");# Opens http://localhost:3000



- **[`MOBILE_APP_TESTING.md`](./MOBILE_APP_TESTING.md)**: Complete mobile app testing guide   ✅ UI elements verified

- **[`CODE_ARCHITECTURE.md`](./CODE_ARCHITECTURE.md)**: Technical setup & architecture

- **`.env`**: Environment configuration template   ✅ Valid date input tested - "15/08/2020 is correct date time!"



## 🎓 Educational Use   ✅ Invalid date input tested - "❌ Input data for Day is out of range!"



**FPT University** - Software Testing Course - October 2025   ✅ Time input tested - 14:30 format accepted// By UiSelector (fallback)# Terminal 2: Start API server

**License**: MIT License - Educational use

   ✅ Clear button tested - Fields reset to dd/mm/yyyy

---

   ✅ Now button tested - Auto-filled "13/10/2025"I.fillField({npm run start:api

**🚀 Complete Testing Suite**: E2E + API + Mobile App + AI Generation

**📱 Real Device Testing**: WebDriverIO + Appium + UiAutomator2

**🤖 AI-Powered**: OpenAI GPT-4o-mini test generation
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
#   T e s t i n g   C I / C D   -   1 0 / 1 3 / 2 0 2 5   0 7 : 3 9 : 2 1  
 