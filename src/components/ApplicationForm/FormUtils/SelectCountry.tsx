import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { getData } from 'country-list';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

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

export const SelectCountry = ({
  inputId,
  inputTitle,
  data,
  isRequired,
  objectKey,
  register,
  watch,
  errors,
}: Props) => {
  const countries = getData();
  return (
    <FormControl
      key={inputId}
      sx={{ my: 1 }}
      error={errors[objectKey] !== undefined}>
      <InputLabel>{inputTitle}</InputLabel>
      <Select
        labelId={inputId}
        {...register(`${inputId}` as const, {
          required: isRequired ? 'This field is required' : false,
        })}
        label={inputTitle}
        value={
          watch(`${inputId}` as const)
            ? watch(`${inputId}` as const)
            : data[objectKey] || ''
        }>
        {countries.map((country) => {
          return (
            <MenuItem key={country.code} value={country.name}>
              {country.name}
            </MenuItem>
          );
        })}
      </Select>
      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </FormControl>
  );
};
