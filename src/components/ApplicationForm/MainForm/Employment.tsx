import { Box, TextField, Button } from '@mui/material/';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { employment } from '../../../fakeApi/Form/employment';

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  formStep: number;
  steps: string[];
}

export const Employment = ({
  handleBack,
  handleNext,
  steps,
  formStep,
}: Props) => {
  const {
    register,
    // handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const form = employment();
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        mt: 1,
      }}>
      {form.map((field) => {
        switch (field.inputType) {
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

          case 'date':
            return (
              <Box sx={{ my: 1 }}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DatePicker
                    key={field.inputId}
                    label={field.inputTitle}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
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

        <Button
          onClick={(e) => {
            e.preventDefault();

            handleNext();
          }}
          size="large"
          variant="contained"
          color="primary">
          {formStep === steps.length - 1 ? 'Submit form' : 'Next step'}
        </Button>
      </Box>
    </Box>
  );
};
