import { Box } from '@mui/material/';
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
import { ControlButtons } from '../FormUtils/ControlButtons';

interface Props {
  handleNext: () => void;
}

export const General = ({ handleNext }: Props) => {
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
    handleNext();
  };
  console.log(typeof control);
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
                isRequired={field.required}
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
                isRequired={field.required}
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
                isRequired={field.required}
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
                isRequired={field.required}
                objectKey={field.inputId as keyof IGeneral}
                errors={errors}
              />
            );
          case 'text':
            return (
              <TextFieldBox
                control={control}
                key={field.inputId}
                isRequired={field.required}
                placeholder={field.placeholder || ''}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                objectKey={field.inputId as keyof IGeneral}
                errors={errors}
              />
            );
        }
      })}
      <ControlButtons form={form} errors={errors} />
    </Box>
  );
};
