import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { itemsAddToDetails } from './SingleFood';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    detailsPage: itemsAddToDetails
  },
});
