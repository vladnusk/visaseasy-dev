import { Box, Button } from '@mui/material/';
import { useForm, SubmitHandler } from 'react-hook-form';
import { generalForm } from '../../../fakeApi/Form/general';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  selectGeneralData,
  updateForm,
} from '../../../store/slices/form/generalSlice';
// import format from 'date-fns/format';
import { IGeneral } from '../../../models/form/IGeneral';
import { SelectCountry } from '../FormUtils/SelectCountry';
import { RadioBox } from '../FormUtils/RadioBox';
import { DatePickerBox } from '../FormUtils/DatePickerBox';
import { DateRangePickerBox } from '../FormUtils/DateRangePickerBox';
import { TextFieldBox } from '../FormUtils/TextFieldBox';

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  formStep: number;
  steps: string[];
}

export const General = ({ handleBack, handleNext, steps, formStep }: Props) => {
  const generalData = useAppSelector(selectGeneralData).form;
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues: generalData });
  const dispatch = useAppDispatch();
  const form = generalForm();
  const onSubmit: SubmitHandler<IGeneral> = (data) => {
    dispatch(updateForm(data));
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
                control={control}
                objectKey={field.inputId as keyof IGeneral}
                errors={errors}
              />
            );
          case 'radio':
            return (
              <RadioBox
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                control={control}
                options={field.options || []}
                objectKey={field.inputId as keyof IGeneral}
                errors={errors}
              />
            );
          case 'date':
            return (
              <DatePickerBox
                control={control}
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                objectKey={field.inputId as keyof IGeneral}
                errors={errors}
              />
            );
          case 'date-range':
            return (
              <DateRangePickerBox
                control={control}
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                objectKey={field.inputId as keyof IGeneral}
                errors={errors}
              />
            );
          case 'text':
            return (
              <TextFieldBox
                control={control}
                key={field.inputId}
                placeholder={field.placeholder || ''}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
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
