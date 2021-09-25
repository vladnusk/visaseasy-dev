import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Box, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;

  objectKey: string;
  errors: any;
  control: any;
}

export const DatePickerBox = ({
  inputId,
  inputTitle,

  objectKey,
  errors,
  control,
}: Props) => {
  return (
    <Box sx={{ my: 1 }} key={inputId}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Controller
          name={`${inputId}` as const}
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <DatePicker
              label={inputTitle}
              {...rest}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />
      </LocalizationProvider>
      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </Box>
  );
};
