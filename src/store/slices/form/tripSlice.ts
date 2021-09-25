import { ITrip } from './../../../models/form/ITrip';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

const initialState = {
  form: <ITrip>{
    nationality: '',
    extraNationality: '',
    destination: '',
    residency: '',
    extraResidency: '',
    companion: '',
    companionApply: '',
  },
};

export const tripSlice = createSlice({
  name: 'trip',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<ITrip>>) => {
      state.form = { ...state.form, ...action.payload };
      // state.nationality.push(action.payload);
      // const uniqueArr = state.nationality.filter((elem, index, self) => {
      //   return index === self.indexOf(elem);
      // });
      // state.nationality = uniqueArr;
    },
  },
});

export const { updateForm } = tripSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTripData = (state: RootState) => state.trip;

export default tripSlice.reducer;
