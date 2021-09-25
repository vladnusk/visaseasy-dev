export const generalForm = () => {
  return [
    {
      inputType: 'text',
      inputTitle: 'Full Name',
      inputId: 'fullName',
      placeholder: 'John Doe',
      inputHelperText: 'Enter your full name',
      required: true,
    },
    {
      inputType: 'date',
      inputTitle: 'Date of birth',
      inputHelperText: 'Enter your date of birth',
      inputId: 'dob',
      required: true,
    },
    {
      inputType: 'radio',
      inputTitle: 'What is your legal marital status?',
      options: ['single', 'married', 'divorced', 'widowed', 'other'],
      inputId: 'maritalStatus',
      required: true,
    },
    {
      inputType: 'date-range',
      inputTitle: 'Desired trip dates',
      inputId: 'tripDate',
      inputHelperText: 'Enter your desired trip dates',
      required: true,
    },

    {
      inputType: 'select-country',
      inputTitle: 'Applying from:',
      inputId: 'applyingFrom',
      inputHelperText: 'What country are you applying from?',
      required: true,
    },
    {
      inputType: 'text',
      inputTitle: 'Home address',
      inputId: 'address',
      placeholder: '3500 maddison st, Palo Alto, CA, USA',
      required: true,
    },
    {
      inputType: 'text',
      inputTitle: 'Phone number',
      inputId: 'phone',
      placeholder: '+1 917 000 0000',
      required: true,
    },
  ];
};
