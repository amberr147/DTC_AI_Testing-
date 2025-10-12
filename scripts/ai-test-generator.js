// AI Test Generator for CodeceptJS
// Usage: npm run generate:tests "write for me 2 test cases for invalid dates"
import "dotenv/config";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const openaiKey = process.env.OPENAI_API_KEY;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateTests() {
  if (!openaiKey) {
    console.log("❌ No OPENAI_API_KEY found in .env");
    console.log("Please add your OpenAI API key to .env file:");
    console.log("OPENAI_API_KEY=your_api_key_here");
    return;
  }

  const userRequest = process.argv[2];
  if (!userRequest) {
    console.log("❌ Please provide a test request!");
    console.log(
      'Example: npm run generate:tests "write for me 2 test cases for invalid dates"'
    );
    return;
  }

  console.log("🤖 Generating tests with AI...");
  console.log("📝 Request:", userRequest);
  console.log("");

  const client = new OpenAI({ apiKey: openaiKey });

  try {
    // Read current test file for context
    const currentTestPath = path.join(
      __dirname,
      "../tests/dateTimeChecker_test.js"
    );
    let currentTests = "";
    if (fs.existsSync(currentTestPath)) {
      currentTests = fs.readFileSync(currentTestPath, "utf8");
    }

    const prompt = `You are an expert CodeceptJS test developer for a Date Time Checker React app.

CURRENT TEST FILE:
\`\`\`javascript
${currentTests}
\`\`\`

APP BEHAVIOR & RULES:
- App title: "Date & Time Validator" (must wait for this text)
- Empty date field shows: "Please enter a date!"
- Empty time field is ALLOWED - app still validates successfully and shows "Valid Date"
- Past dates (like 15/08/2020) are VALID dates - they show "Valid Date"
- Future dates (like 31/12/2025) are VALID dates - they show "Valid Date"
- Date format: dd/mm/yyyy (day/month/year)
- Time field is optional - empty time does not cause validation error

VALIDATION RULES & EXACT ERROR MESSAGES:
- Day validation (1-31): 
  * Day 0 or Day > 31: "Input data for Day is out of range!"
  * Examples: 00/01/2024, 32/01/2024 → "Input data for Day is out of range!"

- Month validation (1-12):
  * Month 0 or Month > 12: "Input data for Month is out of range!"
  * Examples: 15/13/2024, 01/00/2024 → "Input data for Month is out of range!"

- Year validation (1000-3000):
  * Year < 1000 or Year > 3000: "Input data for Year is out of range!"
  * Examples: 15/08/99, 31/12/99, 01/01/3001, 31/12/9999 → "Input data for Year is out of range!"

- Calendar validation (for dates within valid ranges):
  * Non-existent dates: "dd/mm/yyyy is NOT correct date time!"
  * Examples: 30/02/2024 → "30/02/2024 is NOT correct date time!", 31/04/2024 → "31/04/2024 is NOT correct date time!"

- Success messages:
  * Valid dates: "dd/mm/yyyy is correct date time!"
  * Examples: 15/08/2020 → "15/08/2020 is correct date time!", 31/12/3000 → "31/12/3000 is correct date time!"

IMPORTANT: Range validation happens BEFORE calendar validation!

COMPREHENSIVE TEST EXAMPLES FROM CURRENT SUITE:
✅ PASSING TESTS:
- "15/08/2020" → "15/08/2020 is correct date time!" 
- "31/12/3000" → "31/12/3000 is correct date time!" (valid max year)
- "00/01/2024" → "Input data for Day is out of range!"
- "15/13/2024" → "Input data for Month is out of range!" 
- "32/01/2024" → "Input data for Day is out of range!"
- "30/02/2024" → "30/02/2024 is NOT correct date time!" (calendar validation)
- "15/08/99" → "Input data for Year is out of range!" (year < 1000)
- "31/12/9999" → "Input data for Year is out of range!" (year > 3000)

SELECTORS:
- Date input: "#date" 
- Time input: "#time"
- Timezone select: "#timezone" 
- Validate button: ".validate-btn" (shows "Check")
- Set to Now button: ".now-btn" (shows "Now")
- Clear button: ".clear-btn" (shows "Clear")
- Result area: ".result"

USER REQUEST: ${userRequest}

Generate CodeceptJS test scenarios with CORRECT expectations based on actual app behavior above. 
Always start with I.waitForText("Date & Time Validator", 5) after I.amOnPage("/").

Generate ONLY the test code, ready to copy-paste:`;

    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const generatedCode =
      res.choices?.[0]?.message?.content || "No response generated";

    console.log("🎯 Generated Test Cases:");
    console.log("=".repeat(60));
    console.log(generatedCode);
    console.log("=".repeat(60));
    console.log("");
    console.log("📋 To add these tests:");
    console.log("1. Copy the code above");
    console.log("2. Paste into tests/dateTimeChecker_test.js");
    console.log("3. Run: npm run test:e2e");
    console.log("");
    console.log('🔄 To regenerate: npm run generate:tests "your new request"');
  } catch (err) {
    console.error("❌ OpenAI request failed:", err.message || err);
  }
}

generateTests();
