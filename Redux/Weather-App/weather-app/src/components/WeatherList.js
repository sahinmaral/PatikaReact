import { useSelector } from "react-redux";
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeatherCard from "./WeatherCard";
import {retrieveDay} from '../redux/days'

function WeatherList() {
  const weatherState = useSelector((state) => state.weather);

  let filteredWeathers = []

  const renderSwitch = () => {
    switch (weatherState.status) {
      case "pending":
        return (
          <div
            style={{ textAlign: "center", width: "100%", marginTop: "25px" }}
          >
            <p style={{ fontSize: "25px" }}>{weatherState.error}</p>
          </div>
        );
      case "failed":
        return (
          <div
            style={{ textAlign: "center", width: "100%", marginTop: "25px" }}
          >
            <p style={{ fontSize: "25px" }}>
              {weatherState.error} at OpenWeatherAPI
            </p>
          </div>
        );
      case "succeeded":
        filteredWeathers = weatherState.weathers.daily.slice(0,6)
        return (
          <>
            <CurrentWeatherCard todayWeather={filteredWeathers[0]}/>
            <div className="d-flex justify-content-between weather-card-list">             
              {
                filteredWeathers.slice(1,6).map((weather,index)=> {
                  let date = new Date();
                  date.setDate(date.getDate() + index+1);
                  let day = date.toLocaleString('en-us', { weekday: 'long' });
                  day = retrieveDay(day)
                  weather = {...weather,day}

                  return <WeatherCard weather={weather} key={index}/>
                })
              }
            </div>
          </>
        );
      default:
        break;
    }
  };

  return <>{renderSwitch()}</>;
}

export default WeatherList;
