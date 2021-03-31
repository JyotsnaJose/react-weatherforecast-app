import React from "react";

export default function FormattedDate(props) {
  let date = new Date(props.date);
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return <div className="FormattedDate">{props.date}</div>;
}
