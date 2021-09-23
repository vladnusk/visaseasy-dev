export interface ITrip {
  nationality: string;
  extraNationality: string;
  destination: string;
  residency: string;
  extraResidency: string;
  companion: 'yes' | 'no' | '';
  companionApply: 'yes' | 'no' | '';
}
