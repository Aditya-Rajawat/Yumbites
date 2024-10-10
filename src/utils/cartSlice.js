import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isAdd: true,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      return { items: [] };
    },
    addRemove: (state, action) => {
      state.isAdd = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, addRemove } = cartSlice.actions;

export default cartSlice.reducer;
