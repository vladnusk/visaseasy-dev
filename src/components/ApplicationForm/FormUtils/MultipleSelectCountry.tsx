import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';
import { getData } from 'country-list';
import { Controller, useFieldArray } from 'react-hook-form';
interface Props {
  inputId: string;
  inputTitle: string;
  objectKey: string;
  isRequired: boolean;
  control: any;
  errors: any;
  watch: any;
}
import { ErrorMessage } from '@hookform/error-message';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const MultipleSelectCountry = ({
  inputId,
  inputTitle,
  control,
  objectKey,
  isRequired,
  errors,
  watch,
}: Props) => {
  const { fields, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'extraResidencies', // unique name for your Field Array
  });

  const watchFieldArray = watch('extraResidencies');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const countries = getData();

  return (
    <>
      {controlledFields.map((field) => {
        return (
          <FormControl key={field.id} sx={{ my: 1 }}>
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
      })}
      <Button
        onClick={() => {
          append({ extraResidency: '' });
        }}>
        <ControlPointIcon fontSize="small" sx={{ mx: 1 }} /> add additional (if
        any)
      </Button>
    </>
  );
};
