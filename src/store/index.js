import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/slice';
import productsSlice from './products/slice';

export default configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
})