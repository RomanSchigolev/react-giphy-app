import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from 'store/slices';

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
