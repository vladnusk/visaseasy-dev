import { Box } from '@mui/material/';
import { useForm, SubmitHandler } from 'react-hook-form';
import { generalForm } from '../../../fakeApi/Form/general';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  selectGeneralData,
  updateForm,
} from '../../../store/slices/form/generalSlice';
import { IGeneral } from '../../../models/form/IGeneral';
import { FormRender } from '../FormRender';
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
