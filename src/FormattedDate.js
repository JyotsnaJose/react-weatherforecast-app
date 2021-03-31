import React from "react";

export default function FormattedDate(props) {
  let date = new Date(props.date);
  let newDate = {
    month: date.getMonth(),
    date_today: date.getDate(),
    year: date.getFullYear(),
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  if (newDate.hours < 10) {
    newDate.hours = `0${newDate.hours}`;
  }
  if (newDate.minutes < 10) {
    newDate.minutes = `0${newDate.minutes}`;
  }

  return (
    <div className="FormattedDate">
      {months[newDate.month]} {newDate.date_today} {newDate.year},{" "}
      {days[newDate.day]} {newDate.hours}:{newDate.minutes}
    </div>
  );
}
