import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'activeTheme',
  initialState: 'purple',
  reducers: {
    updateActiveTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateActiveTheme } = themeSlice.actions;
export default themeSlice.reducer;
