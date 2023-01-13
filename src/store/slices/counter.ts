import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});

export const { reducer: countReducer, actions: countActions } = slice;
