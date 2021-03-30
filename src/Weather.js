import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Minnesota</h1>
        <h6 className="date">Feb 28 2021, Sunday, 15:11 CST</h6>
      </section>
      <section className="current-weather">
        <div className="row">
          <div className="col-6">
            <div className="temperature">
              <h4>2 ºC</h4>
              <small>Feels like -3º</small>
            </div>
            <img src="" alt="icon" className="weather-icon"></img>
            <h6 className="description">Clear Sky</h6>
          </div>
          <div className="col-6">
            <ul>
              <li>High : 3º</li>
              <li>Low : 1º</li>
              <li>Humidity : 51%</li>
              <li>Wind : 11km/h</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
