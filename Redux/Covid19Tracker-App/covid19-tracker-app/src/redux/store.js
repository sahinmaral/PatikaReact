import { configureStore } from "@reduxjs/toolkit";
import trackerSlice from "./trackerSlice";

export const store = configureStore({
  reducer: {
    tracker: trackerSlice,
  },
});
