import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("Celsius");

  function convertToFahrenheit(event) {
    console.log("hello");
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  if (unit === "Celsius") {
    return (
      <div className="WeatherTemp">
        <h4>
          {props.temp}º{" "}
          <small>
            C |
            <a href="/" onClick={convertToFahrenheit}>
              {" "}
              F{" "}
            </a>
          </small>
        </h4>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h4>
          {(props.temp * 9) / 5 + 32}º{" "}
          <small>
            <a href="/" onClick={convertToCelsius}>
              C
            </a>{" "}
            | F
          </small>
        </h4>
      </div>
    );
  }
}
