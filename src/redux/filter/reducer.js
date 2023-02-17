import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './operations';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
