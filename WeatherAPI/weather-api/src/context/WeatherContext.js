import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useCity } from "./CityContext"

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {

  const [weathers, setWeathers] = useState([])
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  const getWeatherData = () => {

    //city , sadece bir defa degismesi gerekiyorken sanki iki kez degisiyormus gibi useEffect icerisine giriyor.
    //Simdilik bu sekilde duzeltilebilir.
    if(city.name){
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current&appid=${API_KEY}&units=metric`).then((res) => {
        setWeathers(res.data.daily)
      })
    } 

  }

  const { city } = useCity()

  useEffect(() => {
    getWeatherData()
  }, [city])

  const values = {
    weathers
  }

  return <WeatherContext.Provider value={values}>
    {children}
  </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)