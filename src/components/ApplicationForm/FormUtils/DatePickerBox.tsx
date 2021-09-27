import { ErrorMessage } from '@hookform/error-message';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { FormControl, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;
  isRequired: boolean;
  objectKey: string;
  errors: any;
  control: any;
}

export const DatePickerBox = ({
  inputId,
  inputTitle,
  isRequired,
  objectKey,
  errors,
  control,
}: Props) => {
  return (
    <FormControl
      sx={{ my: 1 }}
      key={inputId}
      error={errors[objectKey] !== undefined}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Controller
          name={`${inputId}` as const}
          control={control}
          rules={{ required: isRequired }}
          render={({ field: { ref, ...rest } }) => (
            <DatePicker
              label={inputTitle}
              {...rest}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />
      </LocalizationProvider>
      <ErrorMessage
        errors={errors}
        name={objectKey}
        render={({ message }) => (
          <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
            {message || 'This field is required'}
          </Typography>
        )}
      />
    </FormControl>
  );
};
