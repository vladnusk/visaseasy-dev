export interface IGeneral {
  fullName: string;
  dob: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed' | 'other' | '';
  tripDateFrom: string;
  tripDateTo: string;
  applyingFrom: string;
  address: string;
  phone: string;
}
