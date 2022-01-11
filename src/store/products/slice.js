import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      { id: 1, name: 'Xbox Series X', img: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/xbsx_top.png', code: 'ASD475', price: 499.50, quantity: 75 },
      { id: 2, name: 'Mando Dualsense PS5', img: 'https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png', code: 'ASD475', price: 80.00, quantity: 75 },
      { id: 3, name: `Macbook pro 13'`, img: 'https://pngimg.com/uploads/macbook/macbook_PNG65.png', code: 'ASD475', price: 1650, quantity: 75 },
      { id: 4, name: 'Iphone 13', img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/iphone-13-pro-max-blue-select.png?itok=0Ct_Tzqa', code: 'ASD475', price: 999, quantity: 75 },
    ],
  },
});


export default productsSlice.reducer;