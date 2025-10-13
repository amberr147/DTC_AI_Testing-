# 🧪 DateTimeChecker - Complete Testing Suite# 🧪 DateTimeChecker - Complete Testing Suite



[![CI/CD Pipeline](https://github.com/amberr147/DTC_AI_Testing-/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/amberr147/DTC_AI_Testing-/actions/workflows/ci-cd.yml)[![CI/CD Pipeline](https://github.com/amberr147/DTC_AI_Testing-/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/amberr147/DTC_AI_Testing-/actions/workflows/ci-cd.yml)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)

[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)

[![CodeceptJS](https://img.shields.io/badge/codeceptjs-3.7.5-orange.svg)](https://codecept.io/)[![CodeceptJS](https://img.shields.io/badge/codeceptjs-3.7.5-orange.svg)](https://codecept.io/)

[![Playwright](https://img.shields.io/badge/playwright-1.56.0-green.svg)](https://playwright.dev/)[![Playwright](https://img.shields.io/badge/playwright-1.56.0-green.svg)](https://playwright.dev/)



**Comprehensive testing framework** with **4 testing approaches**: **E2E**, **API**, **Mobile App**, and **AI-powered test generation** for DateTimeChecker application.**Comprehensive testing framework** with **4 testing approaches**: **E2E**, **API**, **Mobile App**, and **AI-powered test generation** for DateTimeChecker application.



## 🚀 Live Demo## 🚀 Live Demo



**🌐 Production App**: [https://dtchman.netlify.app](https://dtchman.netlify.app)**🌐 Production App**: [https://dtchman.netlify.app](https://dtchman.netlify.app)



## 📋 Table of Contents## 📋 Table of Contents



- [🎯 Project Overview](#-project-overview)- [🎯 Project Overview](#-project-overview)

- [✨ Key Features](#-key-features)- [✨ Key Features](#-key-features)

- [🏗️ Architecture](#️-architecture)- [🏗️ Architecture](#️-architecture)

- [🚀 Quick Start](#-quick-start)- [🚀 Quick Start](#-quick-start)

- [🧪 Testing Types](#-testing-types)- [🧪 Testing Types](#-testing-types)

- [📊 CI/CD Pipeline](#-cicd-pipeline)- [📊 CI/CD Pipeline](#-cicd-pipeline)

- [📱 Mobile Testing](#-mobile-testing)- [📱 Mobile Testing](#-mobile-testing)

- [🤖 AI Testing](#-ai-testing)- [🤖 AI Testing](#-ai-testing)

- [📚 Documentation](#-documentation)- [📚 Documentation](#-documentation)



## 🎯 Project Overview## 🎯 Project Overview



**Multi-platform testing suite** for Date & Time Validator application supporting:**Multi-platform testing suite** for Date & Time Validator application supporting:



### **🔍 Testing Coverage:**### **🔍 Testing Coverage:**

- ✅ **Desktop E2E**: Browser automation with Playwright- ✅ **Desktop E2E**: Browser automation with Playwright

- ✅ **API Backend**: REST endpoint validation- ✅ **API Backend**: REST endpoint validation

- ✅ **Mobile Android**: Real device testing with WebDriverIO + Appium- ✅ **Mobile Android**: Real device testing with WebDriverIO + Appium

- ✅ **AI-Enhanced**: OpenAI GPT-4o-mini powered test generation- ✅ **AI-Enhanced**: OpenAI GPT-4o-mini powered test generation



### **🛠️ Technology Stack:**### **🛠️ Technology Stack:**

- **Frontend**: React 18.2.0 with modern ES modules- **Frontend**: React 18.2.0 with modern ES modules

- **Testing Framework**: CodeceptJS 3.7.5- **Testing Framework**: CodeceptJS 3.7.5

- **Browser Automation**: Playwright 1.56.0- **Browser Automation**: Playwright 1.56.0

- **Mobile Testing**: WebDriverIO 9.20.0 + Appium 3.1.0- **Mobile Testing**: WebDriverIO 9.20.0 + Appium 3.1.0

- **AI Integration**: OpenAI GPT-4o-mini API- **AI Integration**: OpenAI GPT-4o-mini API

- **CI/CD**: GitHub Actions with automated workflows- **CI/CD**: GitHub Actions with automated workflows



## ✨ Key Features## ✨ Key Features



### **📅 Date & Time Validation**### **📅 Date & Time Validation**

- **Format Support**: `dd/mm/yyyy` with interactive calendar picker- **Format Support**: `dd/mm/yyyy` with interactive calendar picker

- **Real-time Validation**: Instant feedback with detailed error messages- **Real-time Validation**: Instant feedback with detailed error messages

- **Timezone Support**: 8 major timezones with conversion accuracy- **Timezone Support**: 8 major timezones with conversion accuracy

- **Edge Cases**: Leap year handling, month boundary validation- **Edge Cases**: Leap year handling, month boundary validation



### **🧪 Advanced Testing**### **🧪 Advanced Testing**

- **Production Testing**: Direct testing on live production environment- **Production Testing**: Direct testing on live production environment

- **Cross-browser Support**: Chromium-based automation- **Cross-browser Support**: Chromium-based automation

- **Mobile App Testing**: Real Android device interaction- **Mobile App Testing**: Real Android device interaction

- **AI Test Generation**: Natural language to test case conversion- **AI Test Generation**: Natural language to test case conversion



### **⚡ Performance & Reliability**### **⚡ Performance & Reliability**

- **Headless CI**: Optimized for GitHub Actions environment  - **Headless CI**: Optimized for GitHub Actions environment  

- **Artifact Management**: Screenshot capture on failures- **Artifact Management**: Screenshot capture on failures

- **Parallel Execution**: Independent test job execution- **Parallel Execution**: Independent test job execution

- **Error Reporting**: Comprehensive failure diagnostics- **Error Reporting**: Comprehensive failure diagnostics



## 🏗️ Architecture## 🏗️ Architecture



``````

📁 DTC_AI_Testing/📁 DTC_AI_Testing/

├── 🌐 Frontend (React App)├── 🌐 Frontend (React App)

│   ├── src/components/DateTimeChecker.jsx  # Main component│   ├── src/components/DateTimeChecker.jsx  # Main component

│   ├── public/index.html                   # Entry point│   ├── public/index.html                   # Entry point

│   └── server.js                          # Local API server│   └── server.js                          # Local API server

├── 🧪 Testing Framework├── 🧪 Testing Framework

│   ├── tests/│   ├── tests/

│   │   ├── e2e_testing.js                 # Desktop E2E scenarios│   │   ├── e2e_testing.js                 # Desktop E2E scenarios

│   │   └── api_testing.js                 # Backend API tests│   │   └── api_testing.js                 # Backend API tests

│   ├── scripts/│   ├── scripts/

│   │   ├── final-android-test.cjs         # Mobile testing│   │   ├── final-android-test.cjs         # Mobile testing

│   │   ├── codecept-ai.js                 # AI-enhanced testing│   │   ├── codecept-ai.js                 # AI-enhanced testing

│   │   └── ai-test-generator.js           # AI test generation│   │   └── ai-test-generator.js           # AI test generation

│   └── codecept.conf.cjs                  # Testing configuration│   └── codecept.conf.cjs                  # Testing configuration

├── 🚀 CI/CD Pipeline├── 🚀 CI/CD Pipeline

│   └── .github/workflows/ci-cd.yml        # GitHub Actions│   └── .github/workflows/ci-cd.yml        # GitHub Actions

└── 📚 Documentation└── 📚 Documentation

    ├── README.md                          # Main documentation    ├── README.md                          # Main documentation

    ├── TESTING_GUIDE.md                   # Detailed testing guide    ├── TESTING_GUIDE.md                   # Detailed testing guide

    └── CODE_ARCHITECTURE.md               # Technical architecture    └── CODE_ARCHITECTURE.md               # Technical architecture

``````



## 🚀 Quick Start## 🚀 Quick Start



### **Prerequisites**### **Prerequisites**



```bash```bash

# System Requirements# System Requirements

Node.js >= 16.0.0Node.js >= 16.0.0

npm >= 8.0.0npm >= 8.0.0

Windows PowerShell (for mobile testing)Windows PowerShell (for mobile testing)

``````



### **1. Installation**### **1. Installation**



```bash```bash

# Clone repository# Clone repository

git clone https://github.com/amberr147/DTC_AI_Testing-.gitgit clone https://github.com/amberr147/DTC_AI_Testing-.git

cd DTC_AI_Testing-cd DTC_AI_Testing-



# Install dependencies# Install dependencies

npm installnpm install



# Setup Playwright browsers (one-time)# Setup Playwright browsers (one-time)

npx playwright install --with-depsnpx playwright install --with-deps

``````



### **2. Environment Setup**### **2. Environment Setup**



```bash```bash

# Create .env file# Create .env file

echo "APP_URL=https://dtchman.netlify.app" > .envecho "APP_URL=https://dtchman.netlify.app" > .env

echo "API_URL=http://localhost:8080" >> .envecho "API_URL=http://localhost:8080" >> .env

echo "OPENAI_API_KEY=your_api_key_here" >> .envecho "OPENAI_API_KEY=your_api_key_here" >> .env

``````



### **3. Quick Testing**### **3. Quick Testing**



```bash```bash

# 🖥️ Desktop E2E Testing (Production)# 🖥️ Desktop E2E Testing (Production)

npm run test:e2enpm run test:e2e



# 🔌 API Backend Testing# 🔌 API Backend Testing

npm run start:api     # Terminal 1: Start API servernpm run start:api     # Terminal 1: Start API server

npm run test:api      # Terminal 2: Run API testsnpm run test:api      # Terminal 2: Run API tests



# 📱 Android Mobile Testing (requires setup)# 📱 Android Mobile Testing (requires setup)

npm run test:androidnpm run test:android



# 🤖 AI-Enhanced Testing# 🤖 AI-Enhanced Testing

npm run test:ainpm run test:ai

``````



## 🧪 Testing Types- **Windows** PowerShell (tested on Windows 11)4. **Appium** và UiAutomator2 driver đã cài



### **🖥️ E2E Desktop Testing**### 1. Installation### Setup & Run- **Real-time Validation**: Phản hồi tức thời với thông báo lỗi chi tiết



**Target**: Production website `https://dtchman.netlify.app````````powershell### Setup & Run



```javascript# Clone repository

// Example Test Scenario

Scenario('Validate empty date field @e2e', async ({ I }) => {git clone https://github.com/amberr147/DTC_AI_Testing-.git- **Leap Year**: Xử lý năm nhuận chính xác theo lịch Gregorian

  I.amOnPage('/');

  I.waitForText('Enhanced Date & Time Validator', 5);cd DTC_AI_Testing

  I.click('.validate-btn');

  I.see('Please fill in both date and time fields', '.result');``````bash

});

```# Install dependencies



**Test Cases:**npm install# 1. Setup ADB (chỉ cần chạy 1 lần)`````bash- **Timezone Support**: 8 múi giờ chính với chuyển đổi trực tiếp

- ✅ Empty field validation

- ✅ Past date validation (15/08/2020)

- ✅ Invalid date formats

- ✅ Timezone conversion accuracy# Setup E2E browsers (one-time).\setup-adb.bat



### **🔌 API Backend Testing**npm run setup:e2e



**Target**: Local API server `http://localhost:8080````# 1. Setup ADB (chỉ cần chạy 1 lần)



```javascript

// Example API Test

Scenario('Valid date should return success @api', async ({ I }) => {### 2. Environment Setup# 2. Đảm bảo device connected

  const response = await I.sendPostRequest('/api/validate', {

    date: '15/08/2024',

    time: '14:30',

    timezone: 'Asia/Ho_Chi_Minh'Create `.env` file:adb devices.\setup-adb.bat### � **4 Loại Testing Hoàn Chỉnh**

  });

  I.seeResponseCodeIsSuccessful();

  I.seeResponseContainsKeys(['isValid', 'message', 'timestamp']);

});```env

```

# OpenAI API Key (for AI test generation)

**Test Coverage:**

- ✅ 8 API validation scenariosOPENAI_API_KEY=your_openai_api_key_here# 3. Start Appium server

- ✅ POST request validation

- ✅ Response structure verification

- ✅ Error handling validation

# App URLsappium --log-level info

### **📱 Mobile Android Testing**

APP_URL=http://localhost:3000

**Target**: Real Android DateTimeChecker app (APK)

API_URL=http://localhost:8080# 2. Đảm bảo device connected1. **🖥️ E2E Testing**: Desktop browser automation (CodeceptJS + Playwright)

```javascript

// Mobile Test Workflow```````

Test 6: Enhanced Now Button + Check Button Workflow

→ Launch app# 4. Mở DateTimeChecker app trên device/emulator

→ Click "Now" button (set current date/time)

→ Wait 3 seconds### 3. Start Applications

→ Click "Check" button (validate)

→ Screenshot resultadb devices2. **🔌 API Testing**: Direct HTTP requests đến backend endpoints

→ Verify success message

``````````powershell



**Features:**# Terminal 1: Start React app# 5. Chạy Android tests

- ✅ 6 comprehensive test scenarios

- ✅ Real device interaction via WebDriverIOnpm start

- ✅ UI element validation

- ✅ Screenshot capture# Runs on http://localhost:3000npm run test:android-final3. **📱 Mobile Web Testing**: Browser emulation với viewport + user agent mobile

- ✅ Calendar picker interaction



### **🤖 AI-Powered Testing**

# Terminal 2: Start API server  ``````

**Features:**

- **Test Analysis**: OpenAI GPT-4o-mini analyzes test resultsnpm run start:api

- **Test Generation**: Natural language → CodeceptJS code

- **Quality Assessment**: Coverage analysis and improvement suggestions# API on http://localhost:8080# 3. Mở DateTimeChecker app trên device/emulator4. **📲 Mobile App Testing**: Real Android device/emulator (Appium)



```bash```````

# AI Test Generation Example

npm run generate:tests## 📱 Android App Testing

Input: "create tests for timezone switching"

Output: Ready-to-use CodeceptJS scenarios## 🧪 Testing Commands

```

### Current Implementation

## 📊 CI/CD Pipeline

### **🖥️ Desktop E2E Testing**

### **🔄 Automated Workflows**

- **Framework**: Direct WebDriverIO + Appium (bypasses CodeceptJS for Android compatibility)# 4. Chạy Android tests### 🤖 **AI-Powered Test Generation**

**Triggers:**

- ✅ Push to `main` or `develop` branches`````powershell

- ✅ Pull requests to `main` branch

# E2E testing on desktop browsers- **Target**: Real Android DateTimeChecker app (`com.example.datetimechecker`)

**Jobs Execution:**

npm run test:e2e

#### **🔌 Job 1: API Backend Tests**

```yaml# Playwright automation: Chrome/Firefox/Safari/Edge- **Device**: Android emulator (`emulator-5554`) or physical devicenpm run test:android

- Install Node.js 22.19.0

- Install dependencies + Playwright# Auto screenshot on failures → ./output/

- Start API server (localhost:8080)

- Health check API endpoint```- **Approach**: Direct element interaction using resource IDs

- Run API test suite

- Upload test artifacts

```

### **🔌 API Testing**````- **Natural Language**: Tạo tests bằng tiếng Việt/English

#### **🖥️ Job 2: E2E Desktop Tests**

```yaml

- Install Node.js 22.19.0  

- Install Playwright browsers```powershell  ### Test Coverage ✅

- Check production site availability

- Run E2E tests (headless mode)# Direct HTTP requests to backend API

- Upload failure screenshots

```npm run test:api- **OpenAI GPT-4o-mini**: Phân tích results và tạo code tự động



#### **📋 Job 3: Test Summary**# Test validation rules: day/month/year ranges

```yaml

- Generate results summary# Response format and error messages| Test Case | Description | Expected Result |

- Create GitHub Actions summary

- Success/failure notifications`````

```

|-----------|-------------|-----------------|## 🧪 Test Cases- **Smart Generation**: Convert mô tả → CodeceptJS scenarios ready-to-use

### **🎯 CI/CD Benefits**

- ✅ **Automated Quality Gate**: Every push triggers full test suite### **📱 Mobile App Testing**

- ✅ **Production Validation**: E2E tests run against live production

- ✅ **Fast Feedback**: Results in 3-5 minutes| **UI Verification** | Verify all app elements exist | Title, input fields, buttons found |

- ✅ **Artifact Management**: Failure screenshots and logs

- ✅ **Branch Protection**: PR validation before merge````powershell



## 📱 Mobile Testing# Real Android device/emulator testing  | **Valid Date Input** | Input `15/08/2020` and check | "15/08/2020 is correct date time!" |



### **Prerequisites Setup**npm run test:android-final



```bash# Requires: Android SDK + ADB setup| **Invalid Date Input** | Input `32/01/2024` and check | "❌ Input data for Day is out of range!" |

# 1. Android Studio with DateTimeChecker app built

# 2. Android device/emulator connected# Complete guide: MOBILE_APP_TESTING.md

# 3. ADB in PATH (Android SDK platform-tools)  

# 4. Appium and UiAutomator2 driver installed```| **Time Input** | Input `14:30` in time field | Time accepted and processed |### ✅ Android App Tests## 🛠️ Cài Đặt & Setup



# Quick setup

npm install -g appium

appium driver install uiautomator2### **🤖 AI Test Generation**| **Clear Button** | Click clear to reset fields | Fields return to `dd/mm/yyyy` placeholder |



# Verify setup

.\setup-adb.bat

adb devices```powershell| **Now Button** | Click to auto-fill current date | Current date filled (e.g., `13/10/2025`) |

```

# Generate tests from natural language

### **Mobile Test Scenarios**

npm run generate:tests "tạo 3 test cases cho leap year"

| Test | Description | Validation |

|------|-------------|------------|npm run generate:tests "write test for invalid month validation"

| **Test 1** | Basic app launch | App starts successfully |

| **Test 2** | Date picker interaction | Calendar opens and selects date |# AI-powered test analysis with OpenAI GPT-4o-mini## 🧪 Test Scripts1. **App Launch Test**### Yêu Cầu Hệ Thống

| **Test 3** | Time input validation | Time format accepted |

| **Test 4** | Validation button | Check button triggers validation |````

| **Test 5** | Result verification | Success/error message display |

| **Test 6** | Now + Check workflow | Complete end-to-end flow |## 📱 Mobile App Testing



### **Running Mobile Tests**### 🎯 Main Test Commands - Verify DateTimeChecker app khởi động thành công



```bash**📋 Complete Setup Guide**: See [`MOBILE_APP_TESTING.md`](./MOBILE_APP_TESTING.md)

# Debug UI hierarchy

npm run debug:android-ui### Quick Mobile Setup



# Run full mobile test suite````bash - Kiểm tra UI elements hiển thị đúng- **Node.js** >= 16.0.0

npm run test:android

``````powershell



## 🤖 AI Testing# 1. Setup ADB# Complete test suite (recommended)



### **AI-Enhanced Analysis**.\setup-adb.bat



```bashnpm run test:android-final- **npm** >= 8.0.0

# Run E2E tests with AI analysis

npm run test:ai# 2. Connect Android device/emulator

```

adb devices

**AI Capabilities:**

- 📊 **Test Coverage Analysis**: Identifies gaps and improvements

- 🎯 **Quality Assessment**: Scores test quality (1-10 scale)

- 💡 **Suggestions**: Recommends additional test scenarios# 3. Start Appium server# Debug UI structure2. **Valid Date Input Test**- **Windows** PowerShell (đã test trên Windows 11)

- 🔧 **Code Quality**: Reviews test code patterns

appium --log-level info

### **AI Test Generation**

npm run debug:android-ui

```bash

# Generate tests from natural language# 4. Run comprehensive Android tests

npm run generate:tests

npm run test:android-final   - Nhập date hợp lệ: `15/08/2020`

# Example inputs:

"create 2 test cases for timezone switching"````

"test invalid time formats like 25:00"

"add tests for leap year edge cases"# Individual testing approaches

```

### Mobile Test Coverage ✅

**AI Output Example:**

```javascriptnpm run test:android-direct - Tap Check button### 1. **Clone & Install**

// Generated CodeceptJS test

Scenario('Test timezone conversion accuracy @ai-generated', async ({ I }) => {| Test Case | Status | Description |

  I.amOnPage('/');

  I.fillField('#date', '01/01/2024');|-----------|--------|-------------|npm run test:android-datepicker

  I.fillField('#time', '00:00');

  I.selectOption('#timezone', 'UTC');| **UI Verification** | ✅ | All app elements detected |

  I.click('.validate-btn');

  I.see('Valid Date', '.result');| **Valid Date** | ✅ | `15/08/2020` → Success message |``` - Verify success message: "15/08/2020 is correct date time!"

});

```| **Invalid Date** | ✅ | `32/01/2024` → Error message |



## 📚 Documentation| **Time Input** | ✅ | `14:30` format acceptance |



### **Detailed Guides**| **Clear Button** | ✅ | Fields reset functionality |



- 📖 **[TESTING_GUIDE.md](TESTING_GUIDE.md)**: Comprehensive testing documentation| **Now Button** | ✅ | Auto-fill current date |### 📋 Script Details```powershell

- 🏗️ **[CODE_ARCHITECTURE.md](CODE_ARCHITECTURE.md)**: Technical architecture details

- 📱 **[MOBILE_APP_TESTING.md](MOBILE_APP_TESTING.md)**: Android testing setup## 🔧 Technical Stack

- 🤖 **[ANDROID_TESTING_SETUP.md](ANDROID_TESTING_SETUP.md)**: Mobile environment setup

### **Frontend**| Script | Purpose | Output |3. **Invalid Date Input Test**# Clone repository

### **Quick Reference**

- **React** 18.2.0 + Hooks

| Command | Purpose | Target |

|---------|---------|---------|- **CSS3** với Glass-morphism effects|--------|---------|---------|

| `npm run test:e2e` | Desktop E2E testing | Production site |

| `npm run test:api` | Backend API testing | Local server |- **Create React App** 5.0.1

| `npm run test:android` | Mobile app testing | Android device |

| `npm run test:ai` | AI-enhanced testing | E2E + Analysis || `test:android-final` | Comprehensive 6-test suite | Full functionality validation | - Nhập date không hợp lệ: `32/01/2024`git clone https://github.com/amberr147/DTC_AI_Testing-.git

| `npm run generate:tests` | AI test generation | Natural language |

| `npm start` | Run React app | localhost:3000 |### **Testing Technologies**

| `npm run start:api` | Run API server | localhost:8080 |

- **CodeceptJS** 3.7.5 + Playwright 1.56.0 (E2E)| `debug:android-ui` | UI structure discovery | XML files in `_output/` directory |

## 🎯 Key Achievements

- **WebDriverIO** 9.20.0 + Appium 3.1.0 (Mobile)

### **✅ Testing Excellence**

- **4 Testing Types**: E2E, API, Mobile, AI-powered- **OpenAI** GPT-4o-mini (AI generation)| `test:android-direct` | Basic connection test | WebDriverIO connection verification | - Tap Check buttoncd DTC_AI_Testing

- **Production Ready**: Tests run against live production

- **CI/CD Integration**: Automated quality gates- **Jest** + React Testing Library (Unit tests)

- **Mobile Coverage**: Real Android app testing

| `test:android-datepicker` | DatePicker-specific test | Legacy approach (deprecated) |

### **🚀 Technology Innovation**  

- **AI Integration**: GPT-4o-mini powered test generation### **Backend & API**

- **Modern Stack**: React 18, ES modules, Playwright

- **Cross-platform**: Desktop, mobile, API coverage- **Express.js** API server - Verify error message: "Input data for Day is out of range!"

- **Performance Optimized**: Headless CI execution

- **Endpoint**: POST `/api/validate`

### **📊 Quality Metrics**

- **Test Coverage**: 15+ automated scenarios- **JSON** response format## 🔧 Technical Stack

- **CI/CD Success Rate**: >95% pipeline reliability

- **Response Time**: 3-5 minutes full test suite- **CORS** enabled for development

- **Error Detection**: Comprehensive failure reporting

# Cài dependencies

---

## 📂 Project Structure

## 🤝 Contributing

- **WebDriverIO** 9.20.0 - Direct Android automation

```bash

# Development workflow`````

git checkout -b feature/new-tests

# Make changes📦 DTC_AI_Testing/- **Appium** 3.1.0 - Mobile app automation server## 🔧 Technical Stacknpm install

npm run test:e2e  # Verify locally

git commit -m "✨ Add new test scenarios"├── 🎯 src/                           # React Application

git push origin feature/new-tests

# Create PR → CI/CD runs automatically│   ├── components/- **UiAutomator2** 5.0.5 - Android UI automation driver

```

│   │   ├── DateTimeChecker.jsx      # Main UI component

## 📄 License

│   │   ├── DateTimeValidator.js     # Validation logic- **Android SDK** - ADB và platform-tools

MIT License - See [LICENSE](LICENSE) file for details.

│   │   └── DateTimeChecker.css      # Styling

## 🙏 Acknowledgments

│   └── App.js                       # Root component- **Node.js** - Runtime environment

- **Playwright Team**: Excellent browser automation framework

- **CodeceptJS Community**: Powerful testing framework├── 🧪 tests/                        # All Test Files

- **OpenAI**: GPT-4o-mini API for AI-powered testing

- **React Team**: Modern frontend framework│   └── dateTimeChecker_test.js     # E2E/API test scenarios- **CodeceptJS** 3.7.5 - Test automation framework# Setup Playwright browsers (lần đầu tiên)



---├── 🤖 scripts/                      # Testing Scripts



**🎉 Happy Testing! Complete automation solution with AI intelligence!** 🚀│   ├── ai-test-generator.js        # AI test generation## 📱 Android App Requirements



[![GitHub Stars](https://img.shields.io/github/stars/amberr147/DTC_AI_Testing-?style=social)](https://github.com/amberr147/DTC_AI_Testing-)│   ├── codecept-api.js             # API testing runner

[![GitHub Forks](https://img.shields.io/github/forks/amberr147/DTC_AI_Testing-?style=social)](https://github.com/amberr147/DTC_AI_Testing-)

[![GitHub Issues](https://img.shields.io/github/issues/amberr147/DTC_AI_Testing-)](https://github.com/amberr147/DTC_AI_Testing-/issues)│   ├── codecept-ai.js              # AI-enhanced testing- **Appium** 3.1.0 - Mobile app automationnpm run setup:e2e

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

#   T e s t i n g   C I / C D   -   1 0 / 1 3 / 2 0 2 5   0 7 : 3 9 : 2 1 
 
 
