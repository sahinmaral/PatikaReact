import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";
import weatherSlice from "./weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    country: countrySlice,
  },
});
