import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn } from './operations';
import toast from 'react-hot-toast';
// console.log(signUp.fulfilled());
// console.log(signUp.rejected());
// console.log(logIn.rejected);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  // Immutating by IMMER.
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        // console.log('inSlice: ', action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
