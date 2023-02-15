import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, userRefresh } from './operations';
import toast from 'react-hot-toast';

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
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      .addCase(logOut.rejected, (state, action) => {
        toast.error(action.payload);
        state.isRefreshing = false;
      })
      .addCase(userRefresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userRefresh.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
