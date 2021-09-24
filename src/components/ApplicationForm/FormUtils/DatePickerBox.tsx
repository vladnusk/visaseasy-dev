import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Box, TextField, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;
  data: any;
  isRequired: boolean;
  objectKey: string;
  register: UseFormRegister<Record<string, any>>;
  watch: (arg: string) => string;
  errors: any;
}

export const DatePickerBox = ({
  inputId,
  inputTitle,
  data,
  isRequired,
  objectKey,
  register,
  watch,
  errors,
}: Props) => {
  const [value, setValue] = useState<Date | string | null>(null);
  return (
    <Box sx={{ my: 1 }} key={inputId}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label={inputTitle}
          value={
            value || watch(`${inputId}` as const)
              ? watch(`${inputId}` as const)
              : data[objectKey] || ''
          }
          {...register(`${inputId}` as const, {
            required: isRequired ? 'This field is required' : false,
          })}
          onChange={(newValue) => {
            setValue(format(new Date(newValue || ''), 'yyyy-MM-dd'));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </Box>
  );
};
