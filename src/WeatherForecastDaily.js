import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDaily(props) {
  function tempMax() {
    let temperature = Math.round(props.dailyforecast.temp.max);
    return temperature;
  }
  function tempMin() {
    let temperature = Math.round(props.dailyforecast.temp.min);
    return temperature;
  }
  function iconCode() {
    let code = props.dailyforecast.weather[0].icon;
    return code;
  }
  function day() {
    let date = new Date(props.dailyforecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDaily">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcons icon={iconCode()} size={30} />
      <div className="WeatherForecast-Temperature">
        <span className="WeatherForecastTemp-Max">{tempMax()}º/</span>
        <span className="WeatherForecastTemp-Min">{tempMin()}º</span>
      </div>
    </div>
  );
}
