import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <section>
        <h1>{props.data.cityName}</h1>
        <h6 className="date">
          <FormattedDate date={props.data.date} />
        </h6>
      </section>
      <section className="current-weather">
        <div className="row">
          <div className="col-6">
            <div className="display-temperature">
              <h4>{props.data.temperature} ºC</h4>
              <span>Feels like {props.data.feelslike}º</span>
            </div>
            <div className="icon-description">
              <WeatherIcons icon={props.data.icon} />
              <span className="description text-capitalize">
                {props.data.description}
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>High : {props.data.tempMax}º</li>
              <li>Low : {props.data.tempMin}º</li>
              <li>Humidity : {props.data.humidity}%</li>
              <li>Wind : {props.data.windSpeed}m/s</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
