export const data = () => {
  return [
    {
      country: 'FR',
      mainApplicant: 'John Doe',
      numberOfApplicants: 3,
      visaType: 'Tourism',
      actionRequired: false,
      paymentStatus: 'paid',
      applicationStatus: 'in process',
      createdOn: new Date(Date.now()),
      applicationId: '1',
    },
    {
      country: 'AE',
      mainApplicant: 'Alex Wong',
      numberOfApplicants: 1,
      visaType: 'tourism',
      actionRequired: false,
      paymentStatus: 'paid',
      applicationStatus: 'approved',
      createdOn: new Date(Date.now() - 86000),
      applicationId: '2',
    },
    {
      country: 'US',
      mainApplicant: 'Alex Wong',
      numberOfApplicants: 1,
      visaType: 'tourism',
      actionRequired: false,
      paymentStatus: 'paid',
      applicationStatus: 'approved',
      createdOn: new Date(Date.now() - 86000),
      applicationId: '3',
    },
  ];
};
