import { createSlice } from "@reduxjs/toolkit";
import dummyBooks from "../data/dummyBooks.js";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: dummyBooks, // array of book objects
  },
  reducers: {
    addBook: (state, action) => {
      // add new book to beginning
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;