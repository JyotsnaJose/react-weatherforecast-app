import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <section className="searchCity">
        <form>
          <input type="search" placeholder="Search a city.." />
          <input type="submit" value="Search" />
        </form>
      </section>
    </div>
  );
}
