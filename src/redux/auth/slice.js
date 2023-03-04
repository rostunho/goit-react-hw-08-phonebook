import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, userRefresh } from './operations';
import { toast } from 'react-toastify';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
  },
  // Immutating by IMMER.
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.success('ACCOUNT CREATED');
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        toast.error('This email is already registered');
      });

    builder
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.success('LOG IN SUCCESS');
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        toast.error('Wrong email or password');
      });

    builder
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      });

    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder
      .addCase(userRefresh.pending, state => {
        state.isLoading = true;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(userRefresh.rejected, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
