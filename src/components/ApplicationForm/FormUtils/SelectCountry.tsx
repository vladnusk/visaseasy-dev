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
  control: any;
  errors: any;
}

export const SelectCountry = ({
  inputId,
  inputTitle,
  control,
  objectKey,

  errors,
}: Props) => {
  const countries = getData();
  return (
    <FormControl
      key={inputId}
      sx={{ my: 1 }}
      error={errors[objectKey] !== undefined}>
      <InputLabel>{inputTitle}</InputLabel>
      <Controller
        name={`${inputId}` as const}
        control={control}
        render={({ field: { ref, value, ...rest } }) => (
          <Select
            labelId={inputId}
            label={inputTitle}
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

      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </FormControl>
  );
};
