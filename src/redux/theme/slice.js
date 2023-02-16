import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: false,
  },
  reducers: {
    themeChange: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const { themeChange } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
