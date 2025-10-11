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
        <div className="site-container">
          <h1>Date Time Checker</h1>
          <p className="lead">
            Validate dates and times quickly — simple, reliable checks.
          </p>

          <div className="current-time" style={{ marginTop: 12 }}>
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
        </div>
      </header>

      <main>
        <div className="site-container">
          <DateTimeChecker />
        </div>
      </main>
    </div>
  );
}

export default App;
