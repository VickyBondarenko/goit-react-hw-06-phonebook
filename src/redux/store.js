import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    filter: filterReducer,
  },
});
