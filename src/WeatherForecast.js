import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dailydata, setDailydata] = useState(null);
  function handleResponse(response) {
    setDailydata(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {dailydata.map(function (dailyforecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDaily dailyforecast={dailyforecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "77284b6440cc462afb48cef654bc731c";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
