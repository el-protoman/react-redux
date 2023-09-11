import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const quantity = state[name] ? state[name].quantity + 1 : 1;
      const newItem = { price, quantity };
      state[name] = newItem;
    },
    changeItemQuantity: (state, action) => {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = state[name];
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
  },
});

export const { addItem, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
