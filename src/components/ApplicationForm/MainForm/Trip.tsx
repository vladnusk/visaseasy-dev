import { Box, Button } from '@mui/material/';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ITrip } from '../../../models/form/ITrip';
import { useForm, SubmitHandler } from 'react-hook-form';
import { tripForm } from '../../../fakeApi/Form/trip';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  updateForm,
  selectTripData,
} from '../../../store/slices/form/tripSlice';
import { SelectCountry } from '../FormUtils/SelectCountry';
import { RadioBox } from '../FormUtils/RadioBox';
import { useState } from 'react';
import React from 'react';

interface Props {
  handleNext: () => void;
  formStep: number;
  steps: string[];
}

interface ITripApi {
  inputType: string;
  inputTitle: string;
  inputId: string;
  inputHelperText?: string;
  required: boolean;
  options?: string[];
}

export const Trip = ({ handleNext, steps, formStep }: Props) => {
  const tripData = useAppSelector(selectTripData).form;
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues: tripData });

  const dispatch = useAppDispatch();

  const [form, setForm] = useState<ITripApi[]>(tripForm());
  const onSubmit: SubmitHandler<ITrip> = (data) => {
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
      {form.map((field) => {
        switch (field.inputType) {
          case 'select-country':
            return (
              <React.Fragment key={field.inputId}>
                <SelectCountry
                  inputId={field.inputId}
                  inputTitle={field.inputTitle}
                  control={control}
                  objectKey={field.inputId as keyof ITrip}
                  errors={errors}
                />
                {field.inputId === 'nationality' &&
                form[1].inputId !== 'extraNationality' &&
                !tripData.extraNationality.length ? (
                  <Button
                    onClick={() => {
                      const tmpArr = [...form];
                      tmpArr.splice(1, 0, {
                        inputType: 'select-country',
                        inputTitle: 'Additional nationality',
                        inputId: 'extraNationality',
                        inputHelperText: 'Select your additional nationality',
                        required: false,
                      });
                      setForm(tmpArr);
                    }}>
                    <ControlPointIcon fontSize="small" sx={{ mx: 1 }} /> add
                    additional (if any)
                  </Button>
                ) : null}
                {field.inputId === 'residency' &&
                form[3].inputId !== 'extraResidency' &&
                form[4].inputId !== 'extraResidency' &&
                !tripData.extraResidency.length ? (
                  <Button
                    onClick={() => {
                      const tmpArr = [...form];
                      const index = tmpArr.findIndex(
                        (item) => item.inputId === 'residency',
                      );
                      tmpArr.splice(index + 1, 0, {
                        inputType: 'select-country',
                        inputTitle: 'Additional residency',
                        inputId: 'extraResidency',
                        inputHelperText: 'Select your additional residency',
                        required: false,
                      });
                      setForm(tmpArr);
                    }}>
                    <ControlPointIcon fontSize="small" sx={{ mx: 1 }} /> add
                    additional (if any)
                  </Button>
                ) : null}
              </React.Fragment>
            );

          case 'radio':
            return (
              <RadioBox
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                control={control}
                options={field.options || []}
                objectKey={field.inputId as keyof ITrip}
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
        <Button type="submit" size="large" variant="contained" color="primary">
          {formStep === steps.length - 1 ? 'Submit form' : 'Next step'}
        </Button>
      </Box>
    </Box>
  );
};
