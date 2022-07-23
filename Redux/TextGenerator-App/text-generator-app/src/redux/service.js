import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParagraphAsync = createAsyncThunk(
  "text/getParagraph",
  async (input) => {
    const format = input.isIncludeHTML ? "html" : "text";
    const response = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${input.paragraphCount}&format=${format}`
    );
    return response.data;
  }
);
