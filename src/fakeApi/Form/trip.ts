export const tripForm = () => {
  return [
    {
      inputType: 'select-country',
      inputTitle: 'Nationality',
      inputId: 'nationality',
      required: true,
    },
    {
      inputType: 'select-country',
      inputTitle: 'Destination',
      inputId: 'destination',
      required: true,
    },
    {
      inputType: 'select-country',
      inputTitle: 'Residency (if any)',
      inputId: 'residency',
      required: false,
    },
    {
      inputType: 'select-country-multiple',
      inputTitle: 'Additional residence',
      inputId: 'extraResidency',
      required: false,
    },
    {
      inputType: 'radio',
      inputTitle: 'Are you going with someone else?',
      inputId: 'companion',
      required: true,
      options: ['yes', 'no'],
    },
    {
      inputType: 'radio',
      inputTitle: 'Do you want to apply this person too?',
      inputId: 'companionApply',
      required: false,
      options: ['yes', 'no'],
    },
  ];
};
