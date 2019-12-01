import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row align-items-center">
        <div class="col-4">
          <h1>Póvoa de Varzim</h1>
          <h2>Sunday</h2>
          <h2>December 1</h2>
          <p>Last updated: 22h00</p>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
          <p>Clear</p>
          <div>
            12
            <small>
              ºC | <a href="/">ºF</a>
            </small>
          </div>
        </div>
        <div className="col-4">
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
