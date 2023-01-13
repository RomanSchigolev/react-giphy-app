import { RootStore } from 'store';

export const getCount = (state: RootStore) => state.counter.count;
