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
        <h4 className="temperature">
          {props.temp}º{" "}
          <small className="units">
            C |
            <a href="/" onClick={convertToFahrenheit}>
              {" "}
              F{" "}
            </a>
          </small>
        </h4>
        <span>Feels like {props.feels}ºC</span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h4 className="temperature">
          {Math.round((props.temp * 9) / 5 + 32)}º{" "}
          <small className="units">
            <a href="/" onClick={convertToCelsius}>
              C
            </a>{" "}
            | F
          </small>
        </h4>
        <span>Feels like {Math.round((props.feels * 9) / 5 + 32)}ºF</span>
      </div>
    );
  }
}
