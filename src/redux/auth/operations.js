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
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // console.log('credentials: ', credentials);
      authHeader.set(response.data.token);
      console.log('in Thunk: ', response);
      return response.data;
    } catch (error) {
      // console.log(error);
      return thunkApi.rejectWithValue(
        'Register Error. Try another name, email or password'
      );
    }
  }
);

export const logIn = createAsyncThunk(
  '/auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/users/login', credentials);
      authHeader.set(response.data.token);
      console.log('Error in Try: ', response);
      return response.data;
    } catch (error) {
      console.log('Error in Catch: ', error);
      return thunkApi.rejectWithValue('Log in Error. Wrong email or password');
    }
  }
);
