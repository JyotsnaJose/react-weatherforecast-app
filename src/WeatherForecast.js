import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcons icon={"10n"} size={30} />
          <div className="WeatherForecast-Temperature">
            <span className="WeatherForecastTemp-Max">19º </span>
            <span className="WeatherForecastTemp-Min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
