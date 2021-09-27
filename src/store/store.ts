import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tripReducer from './slices/form/tripSlice';
import generalReducer from './slices/form/generalSlice';
import employmentReducer from './slices/form/employmentSlice';
import formStepReducer from './slices/formStepSlice';
export const store = configureStore({
  reducer: {
    trip: tripReducer,
    general: generalReducer,
    employment: employmentReducer,
    formStep: formStepReducer,
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
