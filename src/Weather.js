import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

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
      date: response.data.dt * 1000,
      cityName: response.data.name,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <section className="searchCity">
          <form className="searchCity input-group">
            <input
              type="search"
              className="form-control search-input"
              placeholder="Search a city.."
            />
            <button
              className="btn btn-outline-secondary searchButtons"
              type="submit"
              id="search-button"
            >
              <img
                src="../images/search.png"
                alt="search"
                className="button-icon"
              />
            </button>
            <button
              className="btn btn-outline-secondary searchButtons"
              type="submit"
              id="search-button"
            >
              <img
                src="../images/location.png"
                alt="location"
                className="button-icon"
              />
            </button>
          </form>
        </section>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    const apiKey = "77284b6440cc462afb48cef654bc731c";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    );
  }
}
