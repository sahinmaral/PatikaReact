import { createSlice } from "@reduxjs/toolkit";
import { items } from "../items";

const initialState = {
  money: 100000000000,
  items,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const foundItem =
        state.items[
          state.items.findIndex((item) => item.id === action.payload.item.id)
        ];

      if (!action.payload.count) {
        foundItem.countInCart += 1;
        state.money -= foundItem.price;
      } else {
        foundItem.countInCart += action.payload.count;
        state.money -= foundItem.price * action.payload.count;
      }
    },
    removeItemToCart: (state, action) => {
      const foundItem =
        state.items[
          state.items.findIndex((item) => item.id === action.payload.item.id)
        ];

      if (!action.payload.count) {
        foundItem.countInCart -= 1;
        state.money += foundItem.price;
      } else {
        foundItem.countInCart -= action.payload.count;
        state.money += foundItem.price * action.payload.count;
      }
      
    },
  },
});

export const getMoney = (state) => state.money.money;
export const getItems = (state) => state.money.items;
export const { addItemToCart, removeItemToCart } = moneySlice.actions;
export default moneySlice.reducer;
