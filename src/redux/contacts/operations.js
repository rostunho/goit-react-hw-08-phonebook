import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Contacts not Found');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error.message');
    }
  }
);

export const updateContact = createAsyncThunk(
  'contact/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue('deleting contact failed');
    }
  }
);
