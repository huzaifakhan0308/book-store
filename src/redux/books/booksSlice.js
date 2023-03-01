import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookstore: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookstore.push(action.payload);
    },
    removeBook: (state, action) => {
      const newArray = state.bookstore.filter((book, index) => index !== action.payload);
      return {
        ...state,
        bookstore: newArray,
      };
    },
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
