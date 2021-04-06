import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

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
              <WeatherTemp
                temp={props.data.temperature}
                feels={props.data.feelslike}
              />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <WeatherIcons icon={props.data.icon} size={40} />
              </li>
              <li>
                <span className="description text-capitalize">
                  {props.data.description}
                </span>
              </li>
              <li>Humidity : {props.data.humidity}%</li>
              <li>Wind : {props.data.windSpeed}m/s</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
