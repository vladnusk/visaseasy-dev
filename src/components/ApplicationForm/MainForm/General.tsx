import {
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
  Box,
  TextField,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
} from '@mui/material/';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { getData } from 'country-list';
import { useForm, SubmitHandler } from 'react-hook-form';
import { generalForm } from '../../../fakeApi/Form/general';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  selectGeneralData,
  setDob,
  setFullName,
  setTripDateFrom,
  setTripDateTo,
  setMaritalStatus,
  setApplyingFrom,
  setAddress,
  setPhone,
} from '../../../store/slices/form/generalSlice';
import { IGeneral } from '../../../models/form/IGeneral';

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  formStep: number;
  steps: string[];
}

export const General = ({ handleBack, handleNext, steps, formStep }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const generalData = useAppSelector(selectGeneralData);
  const countries = getData();
  const form = generalForm();

  const onSubmit: SubmitHandler<IGeneral> = (data) => {
    dispatch(setFullName(data.fullName));
    dispatch(setDob(data.dob));
    dispatch(setTripDateFrom(data.tripDateFrom));
    dispatch(setTripDateTo(data.tripDateTo));
    dispatch(setMaritalStatus(data.maritalStatus));
    dispatch(setApplyingFrom(data.applyingFrom));
    dispatch(setAddress(data.address));
    dispatch(setPhone(data.phone));
    console.log(data);
    handleNext();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        mt: 1,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off">
      {form.map((field) => {
        switch (field.inputType) {
          case 'select-country':
            return (
              <>
                <FormControl
                  key={field.inputId}
                  sx={{ my: 1 }}
                  error={errors[field.inputId as keyof IGeneral] !== undefined}>
                  <InputLabel>{field.inputTitle}</InputLabel>
                  <Select
                    value={
                      watch(`${field.inputId}` as const)
                        ? watch(`${field.inputId}` as const)
                        : generalData[field.inputId as keyof IGeneral] || ''
                    }
                    labelId={field.inputId}
                    {...register(`${field.inputId}` as const, {
                      required: field.required
                        ? 'This field is required'
                        : false,
                    })}>
                    {countries.map((country) => {
                      return (
                        <MenuItem key={country.code} value={country.code}>
                          {country.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </>
            );
          case 'text':
            return (
              <Box sx={{ my: 1 }}>
                <TextField
                  sx={{ width: 300 }}
                  key={field.inputId}
                  id={field.inputId}
                  label={field.inputTitle}
                  variant="outlined"
                  placeholder={field.placeholder}
                  {...register(`${field.inputId}` as const)}
                />
              </Box>
            );
          case 'date-range':
            return (
              <Box
                sx={{
                  my: 1,
                }}>
                <FormHelperText>{field.inputHelperText}</FormHelperText>
                <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      key={field.inputId + 'from'}
                      label="From"
                      value={generalData.tripDateFrom}
                      {...register(`${field.inputId}` as const)}
                      onChange={(newValue) => {
                        dispatch(setTripDateFrom(newValue || ''));
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <DatePicker
                      key={field.inputId + 'to'}
                      label="To"
                      value={generalData.tripDateTo}
                      {...register(`${field.inputId + 'To'}` as const)}
                      onChange={(newValue) => {
                        dispatch(setTripDateTo(newValue || ''));
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
            );
          case 'date':
            return (
              <Box sx={{ my: 1 }}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DatePicker
                    key={field.inputId}
                    label={field.inputTitle}
                    value={generalData.dob}
                    onChange={(newValue) => {
                      dispatch(setDob(newValue || ''));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            );
          case 'radio':
            return (
              <FormControl
                sx={{
                  my: 1,
                }}
                key={field.inputId}>
                <FormLabel component="legend">{field.inputTitle}</FormLabel>
                <RadioGroup
                  row
                  aria-label={field.inputId}
                  name="radio-buttons-group"
                  value={
                    watch(`${field.inputId}` as const)
                      ? watch(`${field.inputId}` as const)
                      : generalData[field.inputId as keyof IGeneral] || ''
                  }>
                  {field.options?.map((option) => {
                    return (
                      <FormControlLabel
                        key={option.length}
                        control={<Radio />}
                        label={option}
                        value={option}
                        {...register(`${field.inputId}` as const)}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            );
        }
      })}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: 400,
          mt: 5,
        }}>
        <Button
          onClick={handleBack}
          size="large"
          sx={{ mr: 2 }}
          variant="outlined"
          color="secondary">
          Previous step
        </Button>

        <Button type="submit" size="large" variant="contained" color="primary">
          {formStep === steps.length - 1 ? 'Submit form' : 'Next step'}
        </Button>
      </Box>
    </Box>
  );
};
