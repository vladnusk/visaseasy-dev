import { ErrorMessage } from '@hookform/error-message';
import { FormControl, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;
  placeholder: string;
  isRequired: boolean;
  objectKey: string;
  errors: any;
  control: any;
}

export const TextFieldBox = ({
  inputId,
  inputTitle,
  placeholder,
  isRequired,
  objectKey,
  errors,
  control,
}: Props) => {
  return (
    <FormControl key={inputId} sx={{ my: 1 }}>
      <Controller
        rules={{ required: isRequired }}
        render={({ field }) => (
          <TextField
            sx={{ width: 300 }}
            error={errors[objectKey] !== undefined}
            id={inputId}
            label={inputTitle}
            variant="outlined"
            placeholder={placeholder}
            {...field}
          />
        )}
        name={`${inputId}` as const}
        control={control}
      />
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
