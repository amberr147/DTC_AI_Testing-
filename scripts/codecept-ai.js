// Simple script to run CodeceptJS and optionally call OpenAI for test suggestions
// Reads OPENAI_API_KEY from .env
require("dotenv").config();
const { exec } = require("child_process");
const OpenAI = require("openai");

const openaiKey = process.env.OPENAI_API_KEY;

async function runE2E() {
  console.log("Running CodeceptJS E2E tests (Playwright)...");
  const child = exec("npx codeceptjs run --steps", { cwd: process.cwd() });

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on("exit", (code) => {
    console.log("\nCodeceptJS finished with exit code", code);
    if (openaiKey) {
      console.log(
        "OpenAI key present — calling AI helper for a short summary..."
      );
      aiSummary();
    }
  });
}

async function aiSummary() {
  if (!openaiKey) {
    console.log("No OPENAI_API_KEY found in .env — skipping AI summary");
    return;
  }

  const client = new OpenAI({ apiKey: openaiKey });

  try {
    const prompt = `You are a test-assistant. Summarize a typical E2E run for a Date Time Checker app and suggest one additional edge-case test.`;
    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    const summary =
      res.choices?.[0]?.message?.content ||
      res.choices?.[0]?.text ||
      "No response";
    console.log("\n--- AI Summary ---\n");
    console.log(summary);
    console.log("\n--- End AI Summary ---\n");
  } catch (err) {
    console.error("OpenAI request failed:", err.message || err);
  }
}

runE2E();
