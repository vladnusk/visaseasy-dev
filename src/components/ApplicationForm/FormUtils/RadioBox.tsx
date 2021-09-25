import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Typography,
  Radio,
} from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;
  options: string[];
  control: any;
  objectKey: string;
  errors: any;
}

export const RadioBox = ({
  inputId,
  inputTitle,
  options,
  control,
  objectKey,

  errors,
}: Props) => {
  return (
    <FormControl sx={{ my: 1 }} key={inputId}>
      <FormLabel component="legend">{inputTitle}</FormLabel>
      <Controller
        render={({ field }) => (
          <RadioGroup row aria-label={inputId} {...field}>
            {options?.map((option) => {
              return (
                <FormControlLabel
                  key={option}
                  control={<Radio />}
                  label={option}
                  value={option}
                />
              );
            })}
          </RadioGroup>
        )}
        name={`${inputId}` as const}
        control={control}
      />

      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </FormControl>
  );
};
