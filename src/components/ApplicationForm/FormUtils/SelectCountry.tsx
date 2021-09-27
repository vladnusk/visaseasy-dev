import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { getData } from 'country-list';
import { Controller } from 'react-hook-form';
interface Props {
  inputId: string;
  inputTitle: string;
  objectKey: string;
  isRequired: boolean;
  control: any;
  errors: any;
}
import { ErrorMessage } from '@hookform/error-message';

export const SelectCountry = ({
  inputId,
  inputTitle,
  control,
  objectKey,
  isRequired,
  errors,
}: Props) => {
  const countries = getData();
  return (
    <FormControl key={inputId} sx={{ my: 1 }}>
      <InputLabel>{inputTitle}</InputLabel>
      <Controller
        name={`${inputId}` as const}
        control={control}
        rules={{ required: isRequired }}
        render={({ field: { ref, value, ...rest } }) => (
          <Select
            labelId={inputId}
            label={inputTitle}
            error={errors[objectKey] !== undefined}
            value={value || ''}
            {...rest}>
            {countries.map((country) => {
              return (
                <MenuItem key={country.code} value={country.name}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
        )}
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
