import { createReducer } from '@reduxjs/toolkit';
import { themeChange } from './operations';

// const savedTheme = localStorage.getItem('persist:theme');
// console.log(savedTheme);

export const themeReducer = createReducer({ isDark: false }, builder => {
  builder.addCase(themeChange, (state, action) => {
    state.isDark = action.payload;
  });
});
