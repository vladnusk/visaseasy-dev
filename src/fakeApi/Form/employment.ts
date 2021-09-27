export const employment = () => {
  return [
    {
      inputType: 'text',
      inputTitle: 'Company name',
      inputId: 'companyName',
      required: true,
      placeholder: 'Apple Inc',
    },
    {
      inputType: 'text',
      inputTitle: 'Position',
      inputId: 'position',
      required: true,
      placeholder: 'Software engineer',
    },
    {
      inputType: 'text',
      inputTitle: 'Company address',
      inputId: 'companyAddress',
      required: true,
      placeholder: '3500 maddison st, Palo Alto, CA, USA',
    },
    {
      inputType: 'date',
      inputTitle: 'Date of employment',
      inputId: 'employmentDate',
      required: true,
      placeholder: '3500 maddison st, Palo Alto, CA, USA',
    },
    {
      inputType: 'text',
      inputTitle: 'Monthly income',
      inputId: 'income',
      required: true,
      placeholder: '10000',
    },
  ];
};
