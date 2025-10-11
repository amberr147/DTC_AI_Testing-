import React, { useState } from "react";
import "./DateTimeChecker.css";
import DateTimeValidator from "./DateTimeValidator";

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

  const validator = new DateTimeValidator();

  // Main validation function (delegates to DateTimeValidator)
  const validateDateTime = () => {
    const res = validator.validate(dateInput, inputTime, timezone);
    setResult(res);
  };

  // Use validator helper for timezone formatting when needed
  const getCurrentTimeInTimezone = (date, tz) => validator.getCurrentTimeInTimezone(date, tz);

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
    const parsed = validator.parseDateInput(dateInput);
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
      <h2>Date & Time Validator</h2>

      <div className="form-row">
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="date">Date (dd/mm/yyyy)</label>
          <div className="date-input-container">
            <input
              type="text"
              id="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              placeholder="dd/mm/yyyy"
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

          <div className={`calendar-popup ${showCalendar ? 'show' : 'hide'}`} aria-hidden={!showCalendar}>
            {showCalendar && <div className="calendar-header">Select a date</div>}
            <input
              type="date"
              value={getDateInputValue()}
              onChange={handleCalendarSelect}
              className="calendar-input"
            />
          </div>
        </div>

        <div className="form-group" style={{ width: 180, marginLeft: 16 }}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            className="time-input"
          />
        </div>
      </div>

      <div className="form-row" style={{ gap: 16, alignItems: 'flex-end' }}>
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="timezone">Timezone</label>
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
            Check
          </button>
          <button onClick={setToNow} className="now-btn">
            Now
          </button>
          <button onClick={clearForm} className="clear-btn">
            Clear
          </button>
        </div>
      </div>

      {result && (
        <div
          className={`result ${result.type === "success" ? "success-message" : "error-message"
            }`}
        >
          <pre>{result.message}</pre>
        </div>
      )}

      <div className="time-display">
        <h3>Now in {timezone}</h3>
        <p className="current-time">{exampleDateTime}</p>
      </div>
    </div>
  );
};

export default DateTimeChecker;
