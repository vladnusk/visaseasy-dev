import { IGeneral } from './../../../models/form/IGeneral';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

const initialState = {
  form: <IGeneral>{
    fullName: '',
    dob: '',
    maritalStatus: '',
    tripDateFrom: '',
    tripDateTo: '',
    applyingFrom: '',
    address: '',
    phone: '',
  },
};

export const generalSlice = createSlice({
  name: 'general',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<IGeneral>>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
});

export const { updateForm } = generalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGeneralData = (state: RootState) => state.general;

export default generalSlice.reducer;
