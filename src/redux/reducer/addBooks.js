import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'books/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(
        'http://elibrary-env.eba-8chmdsyi.us-east-1.elasticbeanstalk.com/api/books/search?value=Горд',
      );

      if (!res.ok) {
        throw new Error('Error get method');
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const addBooks = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.books = [...action.payload];
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default addBooks.reducer;
