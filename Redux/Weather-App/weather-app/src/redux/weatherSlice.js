import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherInfos } from "./services";

const initialState = {
  weathers: [],
  status: 'idle',
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWeatherInfos.pending]: (state) => {
      state.status = "pending";
    },
    [fetchWeatherInfos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.weathers = action.payload;
    },
    [fetchWeatherInfos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const getWeathers = (state) => state.weather.weathers;
export default weatherSlice.reducer;
