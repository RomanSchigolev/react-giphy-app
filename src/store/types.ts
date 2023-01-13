import { store } from 'store/root';

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
