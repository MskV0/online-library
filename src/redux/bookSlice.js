// src/redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { booksData } from '../data/books';

const initialState = {
  books: booksData,
  filteredBooks: booksData,
  searchTerm: '',
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: state.books.length + 1,
      };
      state.books.push(newBook);
      state.filteredBooks = state.books; // Reset filtered books to include the new book
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      if (category === 'All') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(book => book.category === category);
      }
    },
    searchBooks: (state, action) => {
      state.searchTerm = action.payload;
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm === '') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(
          book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm)
        );
      }
    },
  },
});

export const { addBook, filterByCategory, searchBooks } = bookSlice.actions;

export const selectAllBooks = (state) => state.books.books;
export const selectFilteredBooks = (state) => state.books.filteredBooks;
export const selectSearchTerm = (state) => state.books.searchTerm;

export default bookSlice.reducer;