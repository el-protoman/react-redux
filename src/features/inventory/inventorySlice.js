import { createSlice } from '@reduxjs/toolkit';

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      return action.payload;
    },
  },
});

export const { loadData } = inventorySlice.actions;
export default inventorySlice.reducer;
