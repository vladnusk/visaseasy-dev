export const generalForm = () => {
  return [
    {
      inputType: 'text',
      inputTitle: 'Full Name',
      inputId: 'fullName',
      placeholder: 'John Doe',
      required: true,
    },
    {
      inputType: 'date',
      inputTitle: 'Date of birth',
      inputId: 'dob',
      required: true,
    },
    {
      inputType: 'radio',
      inputTitle: 'What is your legal marital status?',
      inputId: 'maritalStatus',
      required: true,
      options: ['single', 'married', 'divorced', 'widowed', 'other'],
    },
    {
      inputType: 'date-range',
      inputTitle: 'Desired trip dates',
      inputId: 'tripDate',
      required: true,
    },

    {
      inputType: 'select-country',
      inputTitle: 'Applying from:',
      inputId: 'applyingFrom',
      required: true,
    },
    {
      inputType: 'text',
      inputTitle: 'Home address',
      inputId: 'address',
      required: true,
      placeholder: '3500 maddison st, Palo Alto, CA, USA',
    },
    {
      inputType: 'text',
      inputTitle: 'Phone number',
      inputId: 'phone',
      required: true,
      placeholder: '+1 917 000 0000',
    },
  ];
};
