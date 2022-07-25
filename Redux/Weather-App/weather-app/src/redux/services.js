import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocation = createAsyncThunk(
  "country/fetchCurrentLocation",
  async (args) => {
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${args.latitude}&longitude=${args.longitude}&localityLanguage=en`;
    const response = await axios(geoApiUrl);
    return response.data;
  }
);

export const fetchWeatherInfos = createAsyncThunk(
  "weather/fetchWeatherInfos",
  async (args) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${args.latitude}&lon=${args.longitude}&exclude=current&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`;
    const response = await axios(url);
    return response.data;
  }
);
