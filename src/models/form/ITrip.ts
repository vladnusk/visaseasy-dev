export interface ITrip {
  nationality: string;
  extraNationality: string;
  destination: string;
  residency: string;
  extraResidencies: string[];
  companion: 'yes' | 'no' | '';
  companionApply: 'yes' | 'no' | '';
}
