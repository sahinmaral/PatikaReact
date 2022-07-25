import React from "react";

function WeatherCard({weather}) {
  return (
    <div className="weather-card">
      <p className="weather-card-day">{weather.day.slice(0,3)}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather-icon'/>
      <p className="weather-card-temp">{Math.ceil((weather.temp.min+weather.temp.max)/2)} °C</p>
    </div>
  );
}

export default WeatherCard;
