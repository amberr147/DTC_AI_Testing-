# 📅 Enhanced Date & Time Validator

A modern React application with **AI-Powered E2E Testing** using CodeceptJS + Playwright + OpenAI integration.

## 🚀 Live Demo

**🌐 Production Deployment**: [https://dtchman.netlify.app](https://dtchman.netlify.app)

## ✨ Features

### 📅 **Date & Time Validation**

- **Flexible Input**: `dd/mm/yyyy` format with calendar picker
- **Real-time Validation**: Instant feedback with detailed error messages
- **Leap Year Handling**: Accurate Gregorian calendar validation
- **Timezone Support**: 8 major timezones with live conversion

### 🤖 **AI-Powered Testing**

- **Natural Language**: Generate tests in Vietnamese/English
- **AI Analysis**: OpenAI GPT-4o-mini analyzes test results
- **Smart Insights**: Automated suggestions for improvements
- **Code Generation**: Convert test descriptions to ready-to-use code

### 🧪 **Modern E2E Testing**

- **CodeceptJS + Playwright**: Local browser automation
- **Production Testing**: Direct testing on live deployment
- **Cross-Browser**: Chrome, Firefox, Safari, Edge support
- **Screenshot Capture**: Auto-capture on failures

## 🛠️ Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation & Development

```bash
# Clone repository
git clone <repository-url>
cd chokhoa

# Install dependencies
npm install

# Start development server
npm start
# Opens http://localhost:3000
```

### Production Build

```bash
# Create optimized production build
npm run build

# Files will be in /build directory
```

## 🧪 Testing Commands

### **🤖 AI-Enhanced Testing**

```bash
# Run E2E tests
npm run test:e2e              # CodeceptJS + Playwright

# AI-powered testing
npm run test:ai               # E2E + AI analysis
npm run generate:tests        # Generate tests from natural language

# Development
npm test                      # Unit tests (Jest)
npm start                     # React dev server
```

### **🎯 AI Testing Features**

- **🧠 AI Analysis**: OpenAI GPT-4o-mini analyzes test results
- **🗣️ Natural Language**: Write tests in Vietnamese/English
- **🚀 Smart Generation**: Convert descriptions to CodeceptJS code
- **📊 Insights**: Automated suggestions and improvements
- **🔄 Local Execution**: No cloud dependencies, runs locally

### **✅ Test Results**

- **Unit Tests**: 11/11 passing (Jest + React Testing Library)
- **E2E Tests**: 3/3 passing (CodeceptJS + Playwright)
- **AI Integration**: Fully functional with OpenAI
- **Browser Support**: Chrome, Firefox, Safari, Edge

## 📁 Project Structure

```
📦 Date & Time Validator
├── 🎯 src/                           # React Application
│   ├── components/DateTimeChecker.jsx # Main component
│   ├── __tests__/                    # Unit tests
│   └── App.js                        # Root component
├── 🤖 scripts/                       # AI Integration
│   ├── codecept-ai.js               # AI analysis engine
│   └── ai-test-generator.js         # Natural language → test code
├── 🧪 tests/                         # E2E Tests
│   └── dateTimeChecker_test.js      # CodeceptJS scenarios
├── ⚙️ codecept.conf.js               # CodeceptJS + Playwright config
├── 📄 .env                           # OpenAI API key & APP_URL
└── 📚 Documentation/
    ├── CODE_ARCHITECTURE.md         # Technical architecture
    └── TESTING_GUIDE.md             # Complete testing guide
```

## 🎯 Usage Examples

### **✅ Valid Date Validation**

```
Input: 25/12/2024, 14:30, Asia/Ho_Chi_Minh
Result: ✅ Valid Date & Time - Monday, December 25, 2024
```

### **❌ Invalid Date Testing**

```
Input: 31/02/2024
Result: ❌ 31/02/2024 is NOT correct date time!
```

### **🤖 AI Test Generation**

```bash
npm run generate:tests
> "tạo test case cho leap year"
# AI generates ready-to-use CodeceptJS code
```

## 🔧 Technical Stack

### **🏗️ Frontend**

- **Framework**: React 18.2.0 with Hooks
- **Styling**: CSS3 with Glass-morphism effects
- **Build**: Create React App 5.0.1
- **Deployment**: Netlify (Auto-deploy)

### **🧪 Testing Stack**

- **E2E Framework**: CodeceptJS 3.7.5 + Playwright
- **AI Integration**: OpenAI GPT-4o-mini
- **Unit Testing**: Jest + React Testing Library
- **Browser Support**: Chrome, Firefox, Safari, Edge

### **🤖 AI Features**

- **Natural Language Processing**: Convert Vietnamese/English to test code
- **Test Analysis**: AI-powered insights and suggestions
- **Smart Generation**: Ready-to-use CodeceptJS scenarios
- **Local Execution**: No cloud dependencies

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

---

**🎓 Enhanced Date & Time Validator with AI-Powered Testing**  
**� October 2025** - CodeceptJS + Playwright + OpenAI Integration
