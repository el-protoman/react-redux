import { createSlice } from '@reduxjs/toolkit';

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload;
    },
    clearSearchTerm: (state) => {
      return '';
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
