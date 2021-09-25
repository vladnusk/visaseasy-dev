import React, { useState } from 'react';
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from '@mui/material/';

import { General } from '../components/ApplicationForm/MainForm/General';
import { Trip } from '../components/ApplicationForm/MainForm/Trip';
import { Employment } from '../components/ApplicationForm/MainForm/Employment';
import { PreviousEuropeTrips } from '../components/ApplicationForm/SpecificForm/PreviousEuropeTrips';
import { useAppSelector } from '../store/hooks';
import { selectTripData } from '../store/slices/form/tripSlice';
function getSteps() {
  return [
    'Trip',
    'General',
    'Employment',
    'Previous travels',
    'Upload documents',
    'Submit',
  ];
}

export const ApplicationFormLayout = () => {
  const tripData = useAppSelector(selectTripData);
  const [formStep, setFormStep] = useState(0);
  const steps = getSteps();
  const handleNext = () => {
    if (formStep > steps.length - 2) return;
    setFormStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    if (formStep <= 0) return;
    setFormStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <Trip handleNext={handleNext} formStep={formStep} steps={steps} />
        );
      case 1:
        return (
          <General
            handleBack={handleBack}
            handleNext={handleNext}
            formStep={formStep}
            steps={steps}
          />
        );
      case 2:
        return (
          <Employment
            handleBack={handleBack}
            handleNext={handleNext}
            formStep={formStep}
            steps={steps}
          />
        );
      case 3:
        return <PreviousEuropeTrips />;
      case 4:
        return 'Upload your documents';
      case 5:
        return 'Form has been completed';
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Typography variant="h4">
          {tripData.form.destination
            ? `${tripData.form.destination} visa application`
            : 'New Application'}
        </Typography>
        <Box>
          <Button
            sx={{
              mr: 2,
            }}
            variant="outlined"
            color="secondary">
            Discard
          </Button>
          <Button variant="contained" color="primary">
            Save draft
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 5,
        }}>
        <Stepper activeStep={formStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 6,
          mb: 6,
          height: '60vh',
        }}>
        {getStepContent(formStep)}
      </Box>
    </Box>
  );
};
