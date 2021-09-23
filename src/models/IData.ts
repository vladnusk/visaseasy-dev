export interface IData {
  country: String;
  mainApplicant: String;
  numberOfApplicants: Number;
  visaType: 'Tourism' | 'business' | 'medical' | 'student' | 'resident';
  actionRequired: Boolean;
  paymentStatus: 'paid' | 'not paid' | 'payment processed';
  applicationStatus:
    | 'in process'
    | 'appointment scheduled'
    | 'approved'
    | 'rejected';
  createdOn: Date;
  applicationID: String;
}
