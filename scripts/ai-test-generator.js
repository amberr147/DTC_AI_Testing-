// AI Test Generator for CodeceptJS
// Usage: npm run generate:tests "write for me 2 test cases for invalid dates"
require("dotenv").config();
const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const openaiKey = process.env.OPENAI_API_KEY;

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

USER REQUEST: ${userRequest}

Generate CodeceptJS test scenarios based on the user request. Follow these rules:

1. Use CodeceptJS syntax with Feature() and Scenario()
2. Use proper I.amOnPage(), I.fillField(), I.click(), I.see(), I.waitForElement() commands
3. Target the Date Time Checker app selectors:
   - Date input: "#date" 
   - Time input: "#time"
   - Timezone select: "#timezone"
   - Validate button: ".validate-btn"
   - Set to Now button: ".now-btn"  
   - Clear button: ".clear-btn"
   - Result area: ".result"
4. Test realistic scenarios for a date/time validation app
5. Include both positive and negative test cases
6. Add proper waits and assertions
7. Use Vietnamese comments if helpful

Generate ONLY the test code, ready to copy-paste into dateTimeChecker_test.js:`;

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
