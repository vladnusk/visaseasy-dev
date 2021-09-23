export const tripForm = () => {
  return [
    {
      inputType: 'select-country',
      inputTitle: 'Nationality',
      inputId: 'nationality',
      inputHelperText: 'Select your nationality',
      required: true,
    },
    {
      inputType: 'select-country',
      inputTitle: 'Destination',
      inputId: 'destination',
      inputHelperText: 'Select your destination country',
      required: true,
    },
    {
      inputType: 'select-country',
      inputTitle: 'Residency (if any)',
      inputId: 'residency',
      inputHelperText: 'Select your residency (if any)',
      required: false,
    },
    {
      inputType: 'radio',
      inputTitle: 'Are you going with someone else?',
      options: ['yes', 'no'],
      inputId: 'companion',
      required: true,
    },
    {
      inputType: 'radio',
      inputTitle: 'Do you want to apply this person too?',
      options: ['yes', 'no'],
      inputId: 'companionApply',
      required: true,
    },
  ];
};
