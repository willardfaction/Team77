import { configureStore } from '@reduxjs/toolkit';
import addBooks from './reducer/addBooks';

export default configureStore({
  reducer: {
    books: addBooks,
  },
});
