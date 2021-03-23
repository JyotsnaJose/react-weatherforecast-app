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
    </div>
  );
}
