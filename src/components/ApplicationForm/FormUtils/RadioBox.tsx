import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Typography,
  Radio,
} from '@mui/material';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface Props {
  inputId: string;
  inputTitle: string;
  options: string[];
  data: any;
  objectKey: string;
  isRequired: boolean;
  register: UseFormRegister<Record<string, any>>;
  watch: (arg: string) => string;
  errors: any;
}

export const RadioBox = ({
  inputId,
  inputTitle,
  options,
  isRequired,
  data,
  objectKey,
  watch,
  register,
  errors,
}: Props) => {
  return (
    <FormControl sx={{ my: 1 }} key={inputId}>
      <FormLabel component="legend">{inputTitle}</FormLabel>
      <RadioGroup
        row
        aria-label={inputId}
        name="radio-buttons-group"
        value={
          watch(`${inputId}` as const)
            ? watch(`${inputId}` as const)
            : data[objectKey] || ''
        }>
        {options?.map((option) => {
          return (
            <FormControlLabel
              key={option}
              control={<Radio />}
              label={option}
              value={option}
              {...register(`${inputId}` as const, {
                required: isRequired ? 'This field is required' : false,
              })}
            />
          );
        })}
      </RadioGroup>
      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </FormControl>
  );
};
