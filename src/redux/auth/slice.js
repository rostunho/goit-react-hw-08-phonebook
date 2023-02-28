import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, userRefresh } from './operations';
import toast from 'react-hot-toast';

const handleRejected = (state, action) => {
  // toast.error(action.payload);
  state.isLoading = false;
  state.isLoggedIn = false;
};

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
      })
      .addCase(signUp.rejected, handleRejected);

    builder
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected);

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
      toast.error(action.payload);
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
      .addCase(userRefresh.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
