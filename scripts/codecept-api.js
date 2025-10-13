const runTests = () => {
  exec(
    'npx codeceptjs run --config codecept.conf.cjs --grep "@api" --steps',
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing tests: ${error.message}`);
        process.exit(1);
      }
      if (stderr) {
        console.error(`Test execution error: ${stderr}`);
        process.exit(1);
      }
      console.log(`Test execution output:\n${stdout}`);
    }
  );
};

runTests();

// Reads OPENAI_API_KEY from .env (do not print key in logs)
const openaiApiKey = process.env.OPENAI_API_KEY;
