import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clear() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // console.log('credentials: ', credentials);
      authHeader.set(response.data.token);
      console.log('in Thunk: ', response);
      return response.data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(
        'Register Error. Try another name, email or password'
      );
    }
  }
);

export const logIn = createAsyncThunk(
  '/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      authHeader.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log('Error in Catch: ', error);
      return thunkAPI.rejectWithValue('Log in Error. Wrong email or password');
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    authHeader.clear();
  } catch (error) {
    thunkAPI.rejectWithValue('Missing header with authorization token.');
  }
});

export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Please, log In');
    }

    try {
      authHeader.set(persistedToken);
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Please, log in');
    }
  }
);
