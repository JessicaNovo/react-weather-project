import React from "react";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row align-items-center">
        <div className="col-sm-4">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <h2>
            <FormatDate date={props.data.date} />
          </h2>
          <p className="updated">
            Last updated: <FormatTime time={props.data.date} />
          </p>
        </div>
        <div className="col-sm-4 current-weather">
          <img src={props.data.icon} alt="{weather.description}" />
          <div>
            <p className="weather-description">{props.data.description}</p>
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <small className="temperature-units">
              ºC | <a href="/">ºF</a>
            </small>
          </div>
        </div>
        <div className="col-sm-4">
          <ul>
            <li>
              Sunrise: <FormatTime time={props.data.sunrise} />
            </li>
            <li>
              Sunset: <FormatTime time={props.data.sunset} />
            </li>
            <br />
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
