import { Box } from '@mui/material/';
import { ITrip } from '../../../models/form/ITrip';
import { useForm, SubmitHandler } from 'react-hook-form';
import { tripForm } from '../../../fakeApi/Form/trip';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  updateForm,
  selectTripData,
} from '../../../store/slices/form/tripSlice';
import { ControlButtons } from '../FormUtils/ControlButtons';
import { FormRender } from '../FormRender';
interface Props {
  handleNext: () => void;
}

export const Trip = ({ handleNext }: Props) => {
  const tripData = useAppSelector(selectTripData).form;
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({ defaultValues: tripData });

  const dispatch = useAppDispatch();

  const form = tripForm();
  const onSubmit: SubmitHandler<ITrip> = (data) => {
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
      <FormRender form={form} control={control} errors={errors} watch={watch} />
      <ControlButtons form={form} errors={errors} />
    </Box>
  );
};
