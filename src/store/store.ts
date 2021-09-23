import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tripReducer from './slices/form/tripSlice';
import generalReducer from './slices/form/generalSlice';

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    general: generalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
