import React from "react";

export default function FormatTime(props) {
  let time = props.time;
  let hour = time.getHours();
  let minutes = time.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {hour}:{minutes}
    </span>
  );
}
