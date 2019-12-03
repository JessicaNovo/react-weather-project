import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";

import "./Weather.css";

export default function Weather(props) {
  function getWeather(response) {
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.main.temp
    });
    setReady(true);
  }

  let [ready, setReady] = useState(false);
  let [weather, setWeather] = useState({});
  const apiKey = "0438fc32e86f8783300a37cf62f26092";

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="form-row">
            <div className="form-group col-md-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="form-group col-md-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="form-group col-md-2">
              <button className="btn btn-secondary w-100">Current</button>
            </div>
          </div>
        </form>
        <div className="row align-items-center">
          <div className="col-sm-4">
            <h1>
              {weather.city}, {weather.country}
            </h1>
            <h2>
              <FormatDate date={weather.date} />
            </h2>
            <p className="updated">
              Last updated: <FormatTime time={weather.date} />
            </p>
          </div>
          <div className="col-sm-4 current-weather">
            <img src={weather.icon} alt="{weather.description}" />
            <div>
              <p className="weather-description">{weather.description}</p>
              <span className="current-temperature">
                {Math.round(weather.temperature)}
              </span>
              <small className="temperature-units">
                ºC | <a href="/">ºF</a>
              </small>
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
              <li>
                Sunrise: <FormatTime time={weather.sunrise} />
              </li>
              <li>
                Sunset: <FormatTime time={weather.sunset} />
              </li>
              <br />
              <li>Humidity: {Math.round(weather.humidity)} %</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.deafultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
    return <h1>Loading...</h1>;
  }
}
