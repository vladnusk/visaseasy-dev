import { FormHelperText, Box, TextField, Button } from '@mui/material/';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
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
import format from 'date-fns/format';
import { IGeneral } from '../../../models/form/IGeneral';
import { SelectCountry } from '../FormUtils/SelectCountry';
import { RadioBox } from '../FormUtils/RadioBox';

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
              <SelectCountry
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                data={generalData}
                isRequired={field.required}
                objectKey={field.inputId as keyof IGeneral}
                watch={watch}
                register={register}
                errors={errors}
              />
            );
          case 'text':
            return (
              <Box sx={{ my: 1 }} key={field.inputId}>
                <TextField
                  sx={{ width: 300 }}
                  id={field.inputId}
                  label={field.inputTitle}
                  variant="outlined"
                  placeholder={field.placeholder}
                  value={
                    watch(`${field.inputId}` as const)
                      ? watch(`${field.inputId}` as const)
                      : generalData[field.inputId as keyof IGeneral] || ''
                  }
                  {...register(`${field.inputId}` as const)}
                />
              </Box>
            );
          case 'date-range':
            return (
              <Box
                sx={{
                  my: 1,
                }}
                key={field.inputId}>
                <FormHelperText>{field.inputHelperText}</FormHelperText>
                <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      label="From"
                      value={generalData.tripDateFrom}
                      {...register(`${field.inputId + 'From'}` as const)}
                      onChange={(newValue) => {
                        dispatch(
                          setTripDateFrom(
                            format(new Date(newValue || ''), 'yyyy-MM-dd'),
                          ),
                        );
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <DatePicker
                      label="To"
                      value={generalData.tripDateTo}
                      {...register(`${field.inputId + 'To'}` as const)}
                      onChange={(newValue) => {
                        dispatch(
                          setTripDateTo(
                            format(new Date(newValue || ''), 'yyyy-MM-dd'),
                          ),
                        );
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
            );
          case 'date':
            return (
              <Box sx={{ my: 1 }} key={field.inputId}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DatePicker
                    label={field.inputTitle}
                    value={generalData.dob}
                    onChange={(newValue) => {
                      dispatch(
                        setDob(format(new Date(newValue || ''), 'yyyy-MM-dd')),
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            );
          case 'radio':
            return (
              <RadioBox
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                options={field.options || []}
                data={generalData}
                isRequired={field.required}
                objectKey={field.inputId as keyof IGeneral}
                watch={watch}
                register={register}
                errors={errors}
              />
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
