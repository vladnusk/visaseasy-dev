import { ITrip } from './../../../models/form/ITrip';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

const initialState: ITrip = {
  nationality: '',
  extraNationality: '',
  destination: '',
  residency: '',
  extraResidency: '',
  companion: '',
  companionApply: '',
};

export const tripSlice = createSlice({
  name: 'trip',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    chooseNationality: (state, action: PayloadAction<string>) => {
      state.nationality = action.payload;
      // state.nationality.push(action.payload);
      // const uniqueArr = state.nationality.filter((elem, index, self) => {
      //   return index === self.indexOf(elem);
      // });
      // state.nationality = uniqueArr;
    },
    chooseExtraNationality: (state, action: PayloadAction<string>) => {
      state.extraNationality = action.payload;
    },
    chooseDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    chooseResidency: (state, action: PayloadAction<string>) => {
      state.residency = action.payload;
    },
    chooseExtraResidency: (state, action: PayloadAction<string>) => {
      state.extraResidency = action.payload;
    },
    chooseCompanion: (state, action: PayloadAction<'yes' | 'no' | ''>) => {
      state.companion = action.payload;
    },
    chooseCompanionApply: (state, action: PayloadAction<'yes' | 'no' | ''>) => {
      state.companionApply = action.payload;
    },
  },
});

export const {
  chooseNationality,
  chooseExtraNationality,
  chooseDestination,
  chooseResidency,
  chooseExtraResidency,
  chooseCompanion,
  chooseCompanionApply,
} = tripSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTripData = (state: RootState) => state.trip;

export default tripSlice.reducer;
