import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectFormStep,
  updateFormStep,
} from '../../../store/slices/formStepSlice';
import { getSteps } from '../../../pages/ApplicationFormLayout';
import { IFormApi } from '../../../models/IFormApi';
import { ICompletedForm } from '../../../models/ICompletedForm';

interface IProps {
  form: IFormApi[];
  errors: any;
}

export const ControlButtons = ({ form, errors }: IProps) => {
  const steps = getSteps();
  const formStep = useAppSelector(selectFormStep);
  const dispatch = useAppDispatch();
  const handleBack = () => {
    if (formStep <= 0) return;
    dispatch(updateFormStep(-1));
  };
  return (
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
        color="secondary"
        disabled={formStep <= 0}>
        Previous step
      </Button>

      <Button
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        disabled={
          form.find((item) => {
            return (
              errors[`${item.inputId}` as keyof ICompletedForm] !== undefined
            );
          })
            ? true
            : false
        }>
        {formStep === steps.length - 1 ? 'Submit form' : 'Next step'}
      </Button>
    </Box>
  );
};
