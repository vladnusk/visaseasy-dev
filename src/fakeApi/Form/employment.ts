export const employment = () => {
  return [
    {
      inputType: 'text',
      inputTitle: 'Company name',
      inputId: 'companyName',
      placeholder: 'Apple Inc',
      inputHelperText: 'Enter your company name',
      required: true,
    },
    {
      inputType: 'text',
      inputTitle: 'Position',
      inputId: 'position',
      placeholder: 'Software engineer',
      inputHelperText: 'Enter your current position',
      required: true,
    },
    {
      inputType: 'text',
      inputTitle: 'Company address',
      inputId: 'companyAddress',
      placeholder: '3500 maddison st, Palo Alto, CA, USA',
      inputHelperText: 'Enter your company address',
      required: true,
    },
    {
      inputType: 'date',
      inputTitle: 'Date of employment',
      inputHelperText: 'Enter the date when you were employed',
      inputId: 'employmentDate',
      required: true,
    },
    {
      inputType: 'text',
      inputTitle: 'Monthly income',
      inputId: 'income',
      placeholder: '10000',
      inputHelperText: 'Enter your monthly income in local currency',
      required: true,
    },
  ];
};
