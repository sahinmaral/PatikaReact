import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
