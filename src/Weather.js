import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      feelslike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      date: response.data.dt * 1000,
      cityName: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = "77284b6440cc462afb48cef654bc731c";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(locationSearch);
  }
  function locationSearch(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "77284b6440cc462afb48cef654bc731c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <section className="searchCity">
          <form className="searchCity input-group" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control search-input"
              placeholder="Type a city.."
              onChange={handleCityInput}
            />
            <button
              className="btn searchButton"
              type="submit"
              id="search-button"
            >
              {" "}
              <img
                src="../images/search.png"
                alt="Search"
                className="button-icon"
              />
            </button>
            <button
              className="btn locationButton"
              type="button"
              id="location-button"
              onClick={handleCurrentLocation}
            >
              {" "}
              <img
                src="../images/location.png"
                alt="Search"
                className="button-icon"
              />
            </button>
          </form>
        </section>
        <WeatherInfo data={weather} />
        <hr />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    );
  }
}
