import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StyleLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SelectPlan from './SelectPlan.jsx';
import AddressForm from './AddressForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Review from './Review.jsx';
import mytheme from '../theme.jsx';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <StyleLink color="inherit" href="https://besteats.com/">
        Best Eats Inc.
      </StyleLink>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default function Subscribe() {
  const steps = ['Select Plan', 'Shipping Details', 'Checkout', 'Select Your Meals'];

  const [activeStep, setActiveStep] = useState(0);
  const [mealPlan, setMealPlan] = useState(3);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SelectPlan setMealPlan={setMealPlan} />;
      case 1:
        return <AddressForm />;
      case 2:
        return <PaymentForm />;
      case 3:
        return <Review mealPlan={mealPlan} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={mytheme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Subscribe
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for subscribing!
                </Typography>
                <Typography variant="subtitle1">
                  You have unlocked access to our fresh and tasty meals.
                  Please head over to our menu to select your first week of meals.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link to="/meal-plan" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
                      See All Meals
                    </Button>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
