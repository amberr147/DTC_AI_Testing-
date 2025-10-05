import React, { useState, useEffect } from "react";
import "./App.css";
import DateTimeChecker from "./components/DateTimeChecker";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Date Time Checker</h1>
        <div className="current-time">
          <p>Current Date & Time</p>
          <div className="time-display">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="time-display">
            {currentTime.toLocaleTimeString("en-US", {
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </div>
        </div>
      </header>
      <main>
        <DateTimeChecker />
      </main>
    </div>
  );
}

export default App;
