import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  character: null,
  status: "idle",
  error: null,
  page: 0,
  hasNextPage: true,
};

const char_limit = 12;

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const response = await fetch(
      `${
        process.env.REACT_APP_API_BASE_ENDPOINT
      }/characters?limit=${char_limit}&offset=${page * char_limit}`
    );
    return await response.json();
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {
    // Get characters
    [getCharacters.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCharacters.fulfilled]: (state, action) => {
      if (action.payload.length < char_limit) state.hasNextPage = false;
      state.characters = [...state.characters, ...action.payload];
      state.status = "succeeded";
      state.page += 1;
    },
    [getCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
