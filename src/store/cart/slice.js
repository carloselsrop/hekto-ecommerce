import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const isExistingProduct = state.cart.find(item => item.id === action.payload.product.id);
      let resultCart;
      if (isExistingProduct) {
        const newCart = state.cart.map(item => {
          if (item.id === action.payload.product.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item;
        });
        resultCart = newCart;
        state.cart = [...newCart];
      } else {
        const newCart = [...state.cart, { ...action.payload.product, quantity: 1 }];
        resultCart = newCart;
        state.cart = [...newCart];
      }
      localStorage.setItem('cart', JSON.stringify(resultCart));
    },
    minusQuantity: (state, action) => {
      console.log(action.payload);
      const newCart = state.cart.map(item => {
        if (item.id === action.payload.product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          }
        }
        return item;
      });
      state.cart = [...newCart];
      localStorage.setItem('cart', JSON.stringify(newCart));
    },
    handleDelete: (state, action) => {
      const newCart = state.cart.filter(product => product.id !== action.payload);
      state.cart = [...newCart];
      localStorage.setItem('cart', JSON.stringify(newCart));
    },
    // handleEmptyCart: (state) => {
    //   state.cart = ([]);
    //   localStorage.setItem('cart', JSON.stringify([]));
    // },
    getCart: (state) => {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cart = (JSON.parse(cart));
      }
    },
  }
});

export const { addToCart, minusQuantity, handleDelete, getCart } = cartSlice.actions;

export default cartSlice.reducer;