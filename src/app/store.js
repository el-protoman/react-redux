import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../features/cart/cartSlice.js';
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js'; // Import the searchTermReducer

// Create and export the store
export const store = createStore(
  combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer, // Add searchTermReducer to combineReducers
  })
);
