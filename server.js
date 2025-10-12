import express from "express";
const app = express();
app.use(express.json());

// Helpers (the same logic as DateTimeValidator)
const parseDateInput = (input) => {
  if (!input || typeof input !== "string") return null;
  const parts = input.split("/");
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  return { day, month, year };
};

const isValidDate = (year, month, day) => {
  const d = new Date(year, month - 1, day);
  return (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
};

app.post("/api/validate", (req, res) => {
  const { date } = req.body;

  if (!date || typeof date !== "string") {
    return res.json({ message: "Please enter date in dd/mm/yyyy format!" });
  }

  const parsed = parseDateInput(date);
  if (!parsed) {
    return res.json({ message: "Please enter date in dd/mm/yyyy format!" });
  }

  const { day, month, year } = parsed;

  // Validate numeric ranges similar to DateTimeValidator
  if (Number.isNaN(day)) {
    return res.json({ message: "Input data for Day is incorrect format!" });
  }
  if (day < 1 || day > 31) {
    return res.json({ message: "Input data for Day is out of range!" });
  }

  if (Number.isNaN(month)) {
    return res.json({ message: "Input data for Month is incorrect format!" });
  }
  if (month < 1 || month > 12) {
    return res.json({ message: "Input data for Month is out of range!" });
  }

  if (Number.isNaN(year)) {
    return res.json({ message: "Input data for Year is incorrect format!" });
  }
  if (year < 1000 || year > 3000) {
    return res.json({ message: "Input data for Year is out of range!" });
  }

  // If components valid but date doesn't exist (e.g. 30/02/2020)
  if (!isValidDate(year, month, day)) {
    return res.json({ message: `${date} is NOT correct date time!` });
  }

  return res.json({ message: `${date} is correct date time!` });
});

app.listen(8080, () => console.log("API running on http://localhost:8080/api"));
