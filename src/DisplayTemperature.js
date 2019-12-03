import React, { useState } from "react";

export default function DisplayTemperature(props) {
  let [temperature, setTemperature] = useState(props.celsius);
  let [celsius, setCelsius] = useState(true);

  function convertCelsius(event) {
    event.preventDefault();
    setTemperature(props.celsius);
    setCelsius(true);
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setTemperature(props.celsius * (9 / 5) + 32);
    setCelsius(false);
  }

  if (celsius) {
    return (
      <div className="DisplayTemperature">
        <span className="temperature">{Math.round(temperature)}</span>
        <small className="temperature-units">
          <span className="active-unit">ºC</span> |{" "}
          <a href="/" onClick={convertFahrenheit}>
            ºF
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div className="DisplayTemperature">
        <span className="temperature">{Math.round(temperature)}</span>
        <small className="temperature-units">
          <a href="/" onClick={convertCelsius}>
            ºC
          </a>{" "}
          | <span className="active-unit">ºF</span>
        </small>
      </div>
    );
  }
}
