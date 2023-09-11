import { configureStore } from '@reduxjs/toolkit';
import  cartReducer  from '../features/cart/cartSlice.js';
import  inventoryReducer  from '../features/inventory/inventorySlice.js';
import  currencyFilterReducer  from '../features/currencyFilter/currencyFilterSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js'; // Import the searchTermReducer

// Create and export the store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer,
  },
});
