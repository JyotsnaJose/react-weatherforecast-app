import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <section className="searchCity">
        <form className="input-group">
          <input
            type="search"
            class="form-control"
            placeholder="Search a city.."
          />
          <input type="submit" value="Search" />
        </form>
      </section>
      <section>
        <h1>Minnesota</h1>
        <h6>Feb 28 2021, Sunday, 15:11 CST</h6>
        <h6>Clear Sky</h6>
      </section>
      <section>
        <div className="row">
          <div className="col-6">
            <img src="" alt="icon"></img>
            <h4>2 ºC </h4>
            <small>Feels like -3º</small>
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
