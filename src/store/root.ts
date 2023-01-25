import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { gifApi, gifApiReducer } from 'store';

export const store = configureStore({
  reducer: {
    [gifApi.reducerPath]: gifApiReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(gifApi.middleware);
  },
});

setupListeners(store.dispatch);
