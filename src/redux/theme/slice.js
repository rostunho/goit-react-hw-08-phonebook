import { createReducer } from '@reduxjs/toolkit';
import { themeChange } from './operations';

export const themeReducer = createReducer({ isDark: false }, builder => {
  builder.addCase(themeChange, (state, action) => {
    state.isDark = action.payload;
  });
});
