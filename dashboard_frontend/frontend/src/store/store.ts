import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './slice';

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;