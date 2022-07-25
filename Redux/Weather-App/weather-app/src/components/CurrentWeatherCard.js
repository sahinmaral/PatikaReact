
function CurrentWeatherCard({todayWeather}) {

  return (
    <div className="d-flex justify-content-between current-weather">
      <div className="current-weather-iconbox">
        <img
          src={`http://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`}
          alt="current-weather-icon"
        />
        <p className="text-center">{todayWeather.weather[0].main}</p>
        <p className="current-temp-min text-center">{Math.ceil((todayWeather.temp.min+todayWeather.temp.max)/2)} °C</p>
      </div>
      <p className="current-temp">{Math.ceil((todayWeather.temp.min+todayWeather.temp.max)/2)} °C</p>
      <div className="weather-info">
        <p>Wind : 11 kmph</p>
        <p>Humidity : {todayWeather.humidity} %</p>
        <p>Pressure : {todayWeather.pressure} mb</p>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
