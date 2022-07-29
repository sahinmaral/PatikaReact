import { createSlice } from "@reduxjs/toolkit";
import { getCountryCase, getGlobalCase } from "./services";

const initialState = {
  country: "",
  covidData: [],
  status: "idle",
  error: null,
};

export const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: {
    [getGlobalCase.pending]: (state, action) => {
      state.status = "pending";
    },
    [getGlobalCase.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.covidData = action.payload;
    },
    [getGlobalCase.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
    [getCountryCase.pending]: (state, action) => {
      state.status = "pending";
    },
    [getCountryCase.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.covidData = action.payload;
    },
    [getCountryCase.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});


export const getCountry = (state) => state.tracker.country;
export const getCovidData = (state) => state.tracker.covidData;

export const { setCountry } = trackerSlice.actions;

export default trackerSlice.reducer;
