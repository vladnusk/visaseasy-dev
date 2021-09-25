import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Box, TextField, Typography } from '@mui/material';

// import { UseFormRegister } from 'react-hook-form';
// import { AnyAction } from 'redux';
// import { useAppDispatch } from '../../../store/hooks';
import { Controller } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;
  data: any;
  // setValue: (arg: string) => AnyAction;
  // isRequired: boolean;
  objectKey: string;
  // register: UseFormRegister<Record<string, any>>;

  errors: any;
  control: any;
}

export const DatePickerBox = ({
  inputId,
  inputTitle,
  data,
  // setValue,
  // isRequired,
  objectKey,

  // register,
  errors,
  control,
}: Props) => {
  // const dispatch = useAppDispatch();
  return (
    <Box sx={{ my: 1 }} key={inputId}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Controller
          name={`${inputId}` as const}
          control={control}
          render={({ field: { ref, value, ...rest } }) => (
            <DatePicker
              label={inputTitle}
              value={data.dob || value}
              {...rest}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />

        {/* <DatePicker
          label={inputTitle}
          value={data[objectKey]}
          {...register(`${inputId}` as const, {
            required: isRequired ? 'This field is required' : false,
          })}
          onChange={(newValue) => {
            dispatch(setValue(format(new Date(newValue || ''), 'yyyy-MM-dd')));
            console.log('object');
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </LocalizationProvider>
      <Typography sx={{ color: 'red', ml: 1, mt: 0.5, fontSize: 12 }}>
        {errors[objectKey]?.message}
      </Typography>
    </Box>
  );
};
