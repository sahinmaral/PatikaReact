import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "./services";

const initialState = {
  currentLocation: {},
  status: "idle",
  error: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchLocation.pending]: (state) => {
      state.status = "pending";
    },
    [fetchLocation.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.currentLocation = action.payload;
    },
    [fetchLocation.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const getCurrentLocation = (state) => state.country.currentLocation;

export default countrySlice.reducer;
