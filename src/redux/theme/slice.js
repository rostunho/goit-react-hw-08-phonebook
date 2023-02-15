import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  //   initialState: false,
  initialState: {
    isDark: false,
  },
  reducers: {
    themeChange: (state, action) => {
      console.log(action);
      console.log(state);
      state.isDark = action.payload;
    },
  },
});

export const { themeChange } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
