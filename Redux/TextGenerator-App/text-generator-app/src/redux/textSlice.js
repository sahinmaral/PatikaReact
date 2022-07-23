import { createSlice } from "@reduxjs/toolkit";
import { getParagraphAsync } from "./service";

const initialState = {
  textInfoObject: {
    isIncludeHTML: false,
    paragraphCount: 4,
  },
  paragraph: "",
  isLoading: false,
  error: null,
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeIsIncludeHTML: (state, action) => {
      state.textInfoObject.isIncludeHTML = action.payload;
    },
    changeParagraphCount: (state, action) => {
      state.textInfoObject.paragraphCount = action.payload;
    },
  },
  extraReducers: {
    [getParagraphAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getParagraphAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.paragraph = action.payload;
    },
    [getParagraphAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const getTextInformationObject = (state) => state.text.textInfoObject;
export const { changeIsIncludeHTML, changeParagraphCount } = textSlice.actions;
export default textSlice.reducer;
