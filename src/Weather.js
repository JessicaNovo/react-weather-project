import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

import "./Weather.css";

export default function Weather(props) {
  let apiKey = `0438fc32e86f8783300a37cf62f26092`;

  function handleSubmit(event) {
    event.preventDefault();
    city = city.trim();

    if (city === "") {
      return false;
    } else {
      search();
    }
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function getWeather(response) {
    setWeather({
      ready: true,
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
  }

  function getCurrentCity() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  const [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={getCity}
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
              <button
                className="btn btn-secondary w-100"
                onClick={getCurrentCity}
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherDisplay data={weather} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
