import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`
  );

  return data;
});

const initialState = {
  quotes: [],
  status: "idle",
  error: null,
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: {
    // Get characters
    [getQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload;
      state.status = "succeeded";
    },
    [getQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default quotesSlice.reducer;
