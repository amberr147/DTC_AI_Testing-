# 🧪 Complete Testing Guide

## 📚 Hướng Dẫn Testing DateTimeChecker

### 🎯 Testing Strategy Overview

Project sử dụng **Multi-Level Testing Approach**:

1. **E2E Tests** - CodeceptJS + Playwright (Production-ready automation)
2. **AI-Enhanced Testing** - OpenAI GPT-4o-mini (Intelligent analysis & generation)
3. **Production Testing** - Direct testing trên https://dtchman.netlify.app

---

## 🚀 Quick Start Testing

### **📋 Prerequisites Setup:**

```bash
# 1. Setup environment variables
echo "APP_URL=https://dtchman.netlify.app" > .env
echo "OPENAI_API_KEY=your_openai_key_here" >> .env

# 2. Install browsers cho Playwright (first time only)
npx playwright install --with-deps
```

### **⚡ Essential Testing Commands:**

```bash
# 🧪 Basic E2E testing (fast, no AI)
npm run test:e2e

# 🤖 E2E testing + AI analysis (intelligent insights)
npm run test:ai

# 📝 Generate tests từ natural language
npm run generate:tests
# Example input: "create tests for invalid dates"
```

---

## 🧪 E2E Testing với CodeceptJS

### **📊 Current Test Scenarios:**

#### **Test Case 1: Current Date/Time Validation**

```javascript
Scenario("Validate current date and time", async ({ I }) => {
  I.amOnPage("/");
  I.waitForText("Enhanced Date & Time Validator", 5);
  I.click(".now-btn"); // Set current date/time
  I.selectOption("#timezone", "Asia/Ho_Chi_Minh");
  I.click(".validate-btn");
  I.see("Valid Date", ".result"); // Should pass
});
```

#### **Test Case 2: Invalid Date Validation**

```javascript
Scenario("Validate invalid date (31st April)", async ({ I }) => {
  I.amOnPage("/");
  I.fillField("#date", "31/04/2023"); // Invalid: April has 30 days
  I.fillField("#time", "15:00");
  I.click(".validate-btn");
  I.see("is NOT correct date time", ".result"); // Should fail
});
```

#### **Test Case 3: Unix Epoch Edge Case**

```javascript
Scenario("Validate edge case (1st January 1970)", async ({ I }) => {
  I.amOnPage("/");
  I.fillField("#date", "01/01/1970"); // Unix epoch start
  I.fillField("#time", "00:00");
  I.click(".validate-btn");
  I.see("Valid Date", ".result"); // Should be valid
});
```

### **🎯 UI Elements Reference:**

| Element             | Selector        | Purpose               | Test Usage                           |
| ------------------- | --------------- | --------------------- | ------------------------------------ |
| **Date Input**      | `#date`         | Date entry            | `I.fillField('#date', '29/02/2024')` |
| **Time Input**      | `#time`         | Time entry            | `I.fillField('#time', '14:30')`      |
| **Timezone**        | `#timezone`     | Timezone selection    | `I.selectOption('#timezone', 'UTC')` |
| **Validate Button** | `.validate-btn` | Trigger validation    | `I.click('.validate-btn')`           |
| **Set Now Button**  | `.now-btn`      | Set current date/time | `I.click('.now-btn')`                |
| **Clear Button**    | `.clear-btn`    | Clear fields          | `I.click('.clear-btn')`              |
| **Result Display**  | `.result`       | Show result           | `I.see('Valid Date', '.result')`     |

---

## 🤖 AI-Enhanced Testing

### **🔍 AI Analysis (npm run test:ai):**

**What it does:**

- ✅ Runs all E2E tests
- 🤖 Sends results to OpenAI GPT-4o-mini
- 📊 Analyzes test coverage và patterns
- 💡 Suggests improvements và additional test cases
- 📈 Provides quality assessment

**Example AI Output:**

```
🤖 AI ANALYSIS:
===============
✅ Test Coverage: Good focus on edge cases and validation
📊 Quality Score: 8.5/10

💡 Suggestions:
• Add timezone conversion accuracy tests
• Test boundary values (leap years, month edges)
• Add performance testing for large date ranges

🔧 Code Quality:
• Wait times are appropriate (3-5 seconds)
• Clear scenario descriptions
• Good use of explicit waits
```

### **📝 AI Test Generation (npm run generate:tests):**

**Usage examples:**

```bash
npm run generate:tests
# Input examples:
"create 2 test cases for timezone switching"
"test invalid time formats like 25:00"
"add tests for leap year edge cases"
```

**AI generates ready-to-use CodeceptJS code:**

```javascript
Scenario("Test timezone conversion", async ({ I }) => {
  I.amOnPage("/");
  I.fillField("#date", "01/01/2024");
  I.fillField("#time", "00:00");
  I.selectOption("#timezone", "UTC");
  I.click(".validate-btn");
  I.see("Valid Date", ".result");
});
```

---

## 📊 Test Data & Coverage

### **🎯 Test Coverage Areas:**

#### **1. Date Validation Test Cases:**

```bash
# ✅ Valid Dates
01/01/2024    # Standard date
29/02/2024    # Leap year February 29th
31/12/2023    # Year end
01/01/1970    # Unix epoch

# ❌ Invalid Dates
29/02/2023    # Non-leap year February 29th
31/04/2024    # April has only 30 days
32/01/2024    # Day > 31
00/01/2024    # Day = 0
```

#### **2. Time Validation Test Cases:**

```bash
# ✅ Valid Times
00:00         # Midnight
12:30         # Mid-day
23:59         # End of day

# ❌ Invalid Times (for future testing)
25:00         # Hour > 23
12:60         # Minute > 59
-01:30        # Negative values
```

#### **3. Timezone Testing:**

```bash
# Available Timezones
UTC                    # Universal time
Asia/Ho_Chi_Minh      # Vietnam time (+7)
America/New_York      # US Eastern time
Europe/London         # UK time
```

---

## 🛠️ Advanced Testing Techniques

### **1. Custom Test Steps:**

Extend `steps_file.js` với custom methods:

```javascript
// In steps_file.js
module.exports = function () {
  return actor({
    // Fill date and time together
    fillDateTime: function (date, time) {
      this.fillField("#date", date);
      this.fillField("#time", time);
    },

    // Complete validation flow
    validateWithTimezone: function (timezone) {
      this.selectOption("#timezone", timezone);
      this.click(".validate-btn");
      this.waitForElement(".result", 5);
    },
  });
};
```

### **2. Data-Driven Testing:**

Create `test-data.json`:

```json
{
  "validDates": [
    { "date": "01/01/2024", "time": "12:30", "expected": "Valid Date" },
    { "date": "29/02/2024", "time": "00:00", "expected": "Valid Date" }
  ],
  "invalidDates": [
    { "date": "29/02/2023", "expected": "is NOT correct date time" },
    { "date": "31/04/2024", "expected": "is NOT correct date time" }
  ]
}
```

---

## 🔧 Debugging & Troubleshooting

### **📸 Screenshot Analysis:**

Khi tests fail, screenshots được save trong `output/` folder:

```bash
output/
├── Test_invalid_date.failed.png
├── Test_timezone_conversion.failed.png
└── ...
```

### **🐛 Common Issues & Solutions:**

#### **Issue 1: Element not found**

```javascript
// ❌ Problem
I.click(".validate-btn"); // Fails immediately

// ✅ Solution
I.waitForElement(".validate-btn", 5); // Wait up to 5 seconds
I.click(".validate-btn");
```

#### **Issue 2: App not loaded**

```javascript
// ✅ Always wait for app to load
I.amOnPage("/");
I.waitForText("Enhanced Date & Time Validator", 5);
// Then proceed with interactions
```

#### **Issue 3: AI analysis fails**

```bash
# Check OpenAI API key
echo $env:OPENAI_API_KEY

# Test basic E2E first
npm run test:e2e  # Should work without AI

# Then try AI analysis
npm run test:ai
```

---

## ✅ Best Practices

### **DO's:**

1. **Always wait for elements**

   ```javascript
   I.waitForElement("#date", 5);
   I.fillField("#date", "01/01/2024");
   ```

2. **Use descriptive scenario names**

   ```javascript
   // ✅ Good
   Scenario('Validate leap year date (29/02/2024)', ...)

   // ❌ Bad
   Scenario('Test 1', ...)
   ```

3. **Add verification waits**
   ```javascript
   I.click(".validate-btn");
   I.waitForElement(".result", 5);
   I.see("Valid Date", ".result");
   ```

### **DON'Ts:**

1. **Don't use fixed delays**

   ```javascript
   // ❌ Bad
   I.wait(5);

   // ✅ Good
   I.waitForElement(".result", 5);
   ```

2. **Don't skip error scenarios**
   ```javascript
   // Test both success and failure
   I.see("Valid Date", ".result"); // Success
   I.see("is NOT correct", ".result"); // Failure
   ```

---

## 📋 Testing Checklist

### **Before Running Tests:**

- [ ] ✅ App accessible at https://dtchman.netlify.app
- [ ] ✅ `.env` file contains OPENAI_API_KEY
- [ ] ✅ `npm install` completed
- [ ] ✅ Playwright browsers installed

### **Test Execution:**

- [ ] ✅ `npm run test:e2e` passes (all 3 scenarios)
- [ ] ✅ Screenshots only for failures
- [ ] ✅ AI analysis provides insights (if using test:ai)

### **Quality Assurance:**

- [ ] ✅ Edge cases covered
- [ ] ✅ Invalid input handling verified
- [ ] ✅ Timezone functionality tested
- [ ] ✅ Error messages user-friendly

---

## 🎯 Quick Commands Reference

```bash
# Development
npm start                    # Run React app locally

# Testing
npm run test:e2e           # Basic E2E tests
npm run test:ai            # E2E tests + AI analysis
npm run generate:tests     # AI test generation

# Debugging
npx codeceptjs run --steps --verbose  # Detailed output
npx codeceptjs run --grep "scenario name"  # Run specific test
```

---

**🎉 Happy Testing! Với setup này, bạn có comprehensive testing solution với AI intelligence!** 🚀
