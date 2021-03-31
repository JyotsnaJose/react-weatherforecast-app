import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  let city = props.defaultCity;
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      feelslike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <section className="searchCity">
          <form className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search a city.."
            />
            <input type="submit" value="Search" />
          </form>
        </section>
        <section>
          <h1>{city}</h1>
          <h6 className="date">Feb 28 2021, Sunday, 15:11 CST</h6>
        </section>
        <section className="current-weather">
          <div className="row">
            <div className="col-6">
              <div className="display-temperature">
                <h4>{weather.temperature} ºC</h4>
                <span>Feels like {weather.feelslike}º</span>
                {/* <img src="" alt="icon" className="weather-icon"></img> */}
                <span className="description text-capitalize">
                  {weather.description}
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>High : {weather.tempMax}º</li>
                <li>Low : {weather.tempMin}º</li>
                <li>Humidity : {weather.humidity}%</li>
                <li>Wind : {weather.windSpeed}m/s</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "77284b6440cc462afb48cef654bc731c";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    );
  }
}
