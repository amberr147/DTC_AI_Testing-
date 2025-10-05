import React, { useState } from "react";
import "./DateTimeChecker.css";

const DateTimeChecker = () => {
  const [dateInput, setDateInput] = useState(""); // dd/mm/yyyy format
  const [inputTime, setInputTime] = useState("");
  const [result, setResult] = useState(null);
  const [timezone, setTimezone] = useState("UTC");
  const [showCalendar, setShowCalendar] = useState(false);

  const timezones = [
    { value: "UTC", label: "UTC" },
    { value: "America/New_York", label: "New York (EST/EDT)" },
    { value: "America/Los_Angeles", label: "Los Angeles (PST/PDT)" },
    { value: "Europe/London", label: "London (GMT/BST)" },
    { value: "Europe/Paris", label: "Paris (CET/CEST)" },
    { value: "Asia/Tokyo", label: "Tokyo (JST)" },
    { value: "Asia/Ho_Chi_Minh", label: "Ho Chi Minh (ICT)" },
    { value: "Australia/Sydney", label: "Sydney (AEST/AEDT)" },
  ];

  // Parse dd/mm/yyyy input
  const parseDateInput = (input) => {
    const parts = input.split("/");
    if (parts.length !== 3) return null;

    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    return { day, month, year };
  };

  // Validate all components and collect all errors
  const validateAllComponents = (day, month, year) => {
    const errors = [];

    // Validate day
    if (isNaN(day)) {
      errors.push("❌ Input data for Day is incorrect format!");
    } else if (day < 1 || day > 31) {
      errors.push("❌ Input data for Day is out of range!");
    }

    // Validate month
    if (isNaN(month)) {
      errors.push("❌ Input data for Month is incorrect format!");
    } else if (month < 1 || month > 12) {
      errors.push("❌ Input data for Month is out of range!");
    }

    // Validate year
    if (isNaN(year)) {
      errors.push("❌ Input data for Year is incorrect format!");
    } else if (year < 1000 || year > 9999) {
      errors.push("❌ Input data for Year is out of range!");
    }

    return errors;
  };

  // Check if date exists in Gregorian calendar
  const isValidDate = (year, month, day) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Main validation function
  const validateDateTime = () => {
    if (!dateInput.trim()) {
      setResult({
        type: "error",
        message: "❌ Please enter a date!",
      });
      return;
    }

    // Parse date input
    const parsed = parseDateInput(dateInput);
    if (!parsed) {
      setResult({
        type: "error",
        message: "❌ Please enter date in dd/mm/yyyy format!",
      });
      return;
    }

    const { day, month, year } = parsed;

    // Validate all components and collect errors
    const validationErrors = validateAllComponents(day, month, year);

    if (validationErrors.length > 0) {
      setResult({
        type: "error",
        message: validationErrors.join("\n"),
      });
      return;
    }

    // Check if date is valid
    const dateString = `${day}/${month}/${year}`;

    if (isValidDate(year, month, day)) {
      // Show additional validation result - use UTC to avoid timezone issues
      const date = new Date(Date.UTC(year, month - 1, day));
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      };

      let resultText = `✅ Valid Date & Time\n`;
      resultText += `Date: ${date.toLocaleDateString("en-US", options)}\n`;

      if (inputTime) {
        const [hours, minutes] = inputTime.split(":");
        resultText += `Time: ${hours}:${minutes}\n`;

        // Create full datetime
        const fullDateTime = new Date(year, month - 1, day, hours, minutes);
        const timeInTimezone = getCurrentTimeInTimezone(fullDateTime, timezone);
        resultText += `In ${timezone}: ${timeInTimezone}\n`;
      }

      resultText += `Days in month: ${getDaysInMonth(year, month)}`;

      setResult({
        type: "success",
        message: resultText,
      });
    } else {
      setResult({
        type: "error",
        message: `❌ ${dateString} is NOT correct date time!\nThis date does not exist in the Gregorian calendar.`,
      });
    }
  };

  // Get current time in timezone
  const getCurrentTimeInTimezone = (date, tz) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(date);
    } catch (error) {
      return date.toLocaleString();
    }
  };

  // Clear form
  const clearForm = () => {
    setDateInput("");
    setInputTime("");
    setResult(null);
  };

  // Set to current date/time
  const setToNow = () => {
    const now = new Date();

    // Set dd/mm/yyyy format
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    setDateInput(`${day}/${month}/${year}`);

    // Set current time
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setInputTime(`${hours}:${minutes}`);
  };

  // Handle calendar date selection
  const handleCalendarSelect = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDate().toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = selectedDate.getFullYear();

    setDateInput(`${day}/${month}/${year}`);
    setShowCalendar(false);
  };

  // Convert dd/mm/yyyy to yyyy-mm-dd for date input
  const getDateInputValue = () => {
    const parsed = parseDateInput(dateInput);
    if (
      parsed &&
      !isNaN(parsed.day) &&
      !isNaN(parsed.month) &&
      !isNaN(parsed.year)
    ) {
      const { day, month, year } = parsed;
      if (year >= 1000 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        return `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`;
      }
    }
    return "";
  };

  const exampleDateTime = getCurrentTimeInTimezone(new Date(), timezone);

  return (
    <div className="datetime-checker">
      <h2>Enhanced Date & Time Validator</h2>

      <div className="form-group">
        <label htmlFor="date">Date (dd/mm/yyyy):</label>
        <div className="date-input-container">
          <input
            type="text"
            id="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            placeholder="dd/mm/yyyy (e.g., 25/12/2024)"
            className="date-text-input"
          />
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="calendar-toggle"
            title="Open Calendar"
          >
            📅
          </button>
        </div>

        {showCalendar && (
          <div className="calendar-popup">
            <input
              type="date"
              value={getDateInputValue()}
              onChange={handleCalendarSelect}
              className="calendar-input"
            />
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time (optional):</label>
        <input
          type="time"
          id="time"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="timezone">Timezone:</label>
        <select
          id="timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        >
          {timezones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>

      <div className="button-group">
        <button onClick={validateDateTime} className="validate-btn">
          Check Date & Time
        </button>
        <button onClick={setToNow} className="now-btn">
          Set to Now
        </button>
        <button onClick={clearForm} className="clear-btn">
          Clear
        </button>
      </div>

      {result && (
        <div
          className={`result ${
            result.type === "success" ? "success-message" : "error-message"
          }`}
        >
          <pre>{result.message}</pre>
        </div>
      )}

      <div className="time-display">
        <h3>Current Time in {timezone}:</h3>
        <p className="current-time">{exampleDateTime}</p>
      </div>
    </div>
  );
};

export default DateTimeChecker;
