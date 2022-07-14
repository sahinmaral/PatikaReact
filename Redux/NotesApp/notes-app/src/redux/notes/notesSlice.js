import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// 95 characters

const items = [
  {
    id: 1,
    note: "Some quick example text to build on the card title and make up the bulk of the card's content..",
    color: "#4fc3f7",
  },
  {
    id: 2,
    note: "Some quick example text to build on the card title and make up the bulk of the card's content..",
    color: "#ffd54f",
  },
];

const initialState = {
  filtered: items,
  filter: "",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteNote: (state, action) => {
      state.filtered = state.filtered.filter(
        (item) => item.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.filtered = items.filter((item) => item.note.includes(state.filter));
    },
  },
});

export const getNotes = (state) => state.notes.filtered;
export const { addNote, deleteNote, setFilter } = notesSlice.actions;
export default notesSlice.reducer;
