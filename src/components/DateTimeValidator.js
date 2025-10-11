class DateTimeValidator {
  // Parse dd/mm/yyyy input
  parseDateInput(input) {
    if (!input || typeof input !== "string") return null;
    const parts = input.split("/");
    if (parts.length !== 3) return null;

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    return { day, month, year };
  }

  // Validate components and collect errors
  validateAllComponents(day, month, year) {
    const errors = [];

    if (isNaN(day)) {
      errors.push("❌ Input data for Day is incorrect format!");
    } else if (day < 1 || day > 31) {
      errors.push("❌ Input data for Day is out of range!");
    }

    if (isNaN(month)) {
      errors.push("❌ Input data for Month is incorrect format!");
    } else if (month < 1 || month > 12) {
      errors.push("❌ Input data for Month is out of range!");
    }

    if (isNaN(year)) {
      errors.push("❌ Input data for Year is incorrect format!");
    } else if (year < 1000 || year > 3000) {
      errors.push("❌ Input data for Year is out of range!");
    }

    return errors;
  }

  // Check if a date exists in the Gregorian calendar
  isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  // Get number of days in month
  getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // Returns formatted time in a timezone
  getCurrentTimeInTimezone(date, tz) {
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
  }

  // Full validate that returns an object { type, message }
  validate(dateInput, inputTime, timezone) {
    if (!dateInput || !dateInput.trim()) {
      return { type: "error", message: "❌ Please enter a date!" };
    }

    const parsed = this.parseDateInput(dateInput);
    if (!parsed) {
      return {
        type: "error",
        message: "❌ Please enter date in dd/mm/yyyy format!",
      };
    }

    const { day, month, year } = parsed;
    const validationErrors = this.validateAllComponents(day, month, year);
    if (validationErrors.length > 0) {
      return { type: "error", message: validationErrors.join("\n") };
    }

    const dateString = `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
    if (this.isValidDate(year, month, day)) {
      return {
        type: "success",
        message: `${dateString} is correct date time!`,
      };
    }

    return {
      type: "error",
      message: `${dateString} is NOT correct date time!`,
    };
  }
}

export default DateTimeValidator;
