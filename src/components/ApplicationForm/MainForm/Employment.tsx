import { Box } from '@mui/material/';
import { SubmitHandler, useForm } from 'react-hook-form';
import { employment } from '../../../fakeApi/Form/employment';
import { IEmployment } from '../../../models/form/IEmployment';
import { FormRender } from '../FormRender';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  selectEmploymentData,
  updateForm,
} from '../../../store/slices/form/employmentSlice';
import { ControlButtons } from '../FormUtils/ControlButtons';

interface Props {
  handleNext: () => void;
}

export const Employment = ({ handleNext }: Props) => {
  const employmentData = useAppSelector(selectEmploymentData).form;
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues: employmentData });
  const onSubmit: SubmitHandler<IEmployment> = (data) => {
    dispatch(updateForm(data));
    console.log(data);
    handleNext();
  };
  const form = employment();

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
      <FormRender form={form} control={control} errors={errors} />
      <ControlButtons form={form} errors={errors} />
    </Box>
  );
};
