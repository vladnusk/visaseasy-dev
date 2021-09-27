import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state

const initialState = 0;

export const formStepSlice = createSlice({
  name: 'formStep',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateFormStep: (state, action: PayloadAction<number>) => {
      return (state += action.payload);
    },
  },
});

export const { updateFormStep } = formStepSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFormStep = (state: RootState) => state.formStep;

export default formStepSlice.reducer;
