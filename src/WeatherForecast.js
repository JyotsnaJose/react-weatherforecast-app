import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "77284b6440cc462afb48cef654bc731c";
  const unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);
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
