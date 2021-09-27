import { ErrorMessage } from '@hookform/error-message';
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
  isRequired: boolean;
  objectKey: string;
  errors: any;
}

export const RadioBox = ({
  inputId,
  inputTitle,
  options,
  control,
  isRequired,
  objectKey,

  errors,
}: Props) => {
  return (
    <FormControl sx={{ my: 1 }} key={inputId}>
      <FormLabel component="legend">{inputTitle}</FormLabel>
      <Controller
        rules={{ required: isRequired }}
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
