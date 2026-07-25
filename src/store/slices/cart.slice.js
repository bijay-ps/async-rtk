import { createSlice } from "@reduxjs/toolkit";

const initialItems = [];

const recalculateTotals = (state) => {
  state.totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  state.totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );
};

const INITIAL_STATE = {
  items: initialItems,
  totalAmount: initialItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  ),
  totalItems: initialItems.reduce((total, item) => total + item.quantity, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          description: newItem.description,
          title: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
      }
      recalculateTotals(state);
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (!existingItem) {
        return;
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity -= 1;
      }
      recalculateTotals(state);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
