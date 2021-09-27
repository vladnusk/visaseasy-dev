import { IEmployment } from './../../../models/form/IEmployment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

const initialState = {
  form: <IEmployment>{
    companyName: '',
    position: '',
    companyAddress: '',
    employmentDate: '',
    income: '',
  },
};

export const employmentSlice = createSlice({
  name: 'employment',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<IEmployment>>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
});

export const { updateForm } = employmentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEmploymentData = (state: RootState) => state.employment;

export default employmentSlice.reducer;
