import { IGeneral } from './../../../models/form/IGeneral';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

const initialState: IGeneral = {
  fullName: '',
  dob: '',
  maritalStatus: '',
  tripDateFrom: '',
  tripDateTo: '',
  applyingFrom: '',
  address: '',
  phone: '',
};

export const generalSlice = createSlice({
  name: 'general',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setDob: (state, action: PayloadAction<string>) => {
      state.dob = action.payload;
    },
    setMaritalStatus: (
      state,
      action: PayloadAction<
        'single' | 'married' | 'divorced' | 'widowed' | 'other' | ''
      >,
    ) => {
      state.maritalStatus = action.payload;
    },
    setTripDateFrom: (state, action: PayloadAction<string>) => {
      state.tripDateFrom = action.payload;
    },
    setTripDateTo: (state, action: PayloadAction<string>) => {
      state.tripDateTo = action.payload;
    },
    setApplyingFrom: (state, action: PayloadAction<string>) => {
      state.applyingFrom = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const {
  setFullName,
  setDob,
  setTripDateFrom,
  setTripDateTo,
  setMaritalStatus,
  setApplyingFrom,
  setAddress,
  setPhone,
} = generalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGeneralData = (state: RootState) => state.general;

export default generalSlice.reducer;
