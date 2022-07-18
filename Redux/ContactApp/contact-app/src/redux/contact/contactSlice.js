import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors(
  (state) => state.contact
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    deleteContact: contactAdapter.removeOne,
    deleteAllContacts: contactAdapter.removeAll,
    updateContact: contactAdapter.updateOne,
  },
});

export const { addContact, deleteContact, deleteAllContacts,updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
