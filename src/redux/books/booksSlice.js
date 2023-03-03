import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mR0gYiE3c1jvdl27L7yn/books/';

const initialState = {
  bookstore: [],
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);

export const postBooks = createAsyncThunk(
  'books/postBooks',
  async (obj) => {
    const response = await axios.post(BASE_URL, obj);
    return response.data;
  },
);

export const deletBooks = createAsyncThunk(
  'books/postBooks',
  async (itemId) => {
    const response = await axios.delete(BASE_URL + itemId);
    return response.data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      bookstore: action.payload,
    }));
  },

});

export default booksSlice.reducer;
