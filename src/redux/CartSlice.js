import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    add: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        state.cartItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      state.cartItems = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrement: (state, action) => {
      state.cartItems = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  }
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
