import React from "react";
import "./Weather.css";

export default function Weather() {
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
              className="btn btn-secondary w-100"
            />
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-secondary w-100">Current</button>
          </div>
        </div>
      </form>
      <div className="row align-items-center">
        <div className="col-sm-4">
          <h1>Póvoa de Varzim</h1>
          <h2>Sunday, December 1</h2>
          <p className="updated">Last updated: 22h00</p>
        </div>
        <div className="col-sm-4 current-weather">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
          <div>
            <p className="weather-description">Clear</p>
            <span className="current-temperature">12</span>
            <small className="temperature-units">
              ºC | <a href="/">ºF</a>
            </small>
          </div>
        </div>
        <div className="col-sm-4">
          <ul>
            <li>Sunrise: 07h36</li>
            <li>Sunset: 17h14</li>
            <br />
            <li>Humidity: 66%</li>
            <li>Wind: 23 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
