import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import filmReducer from './filmSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    film: filmReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
