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
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SelectPlan from './SelectPlan.jsx';
import AddressForm from './AddressForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Review from './Review.jsx';
import Meals from './Meals.jsx'; // just a placeholder for testing
import mytheme from './theme.jsx';

// const theme = createTheme();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://besteats.com/">
        Best Eats Inc.
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default function Subscribe() {
  const steps = ['Select Plan', 'Shipping Details', 'Checkout', 'Select Your Meals'];

  const [activeStep, setActiveStep] = useState(0);
  const [mealQty, setMealQty] = useState(3);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const seeAllMeals = () => {
    console.log('clicked');
    // return <Meals />;
    return (
      <Router>
        <Link to="/meal-plan">Meal Plan</Link>
        <Route
          exact
          path="/meal-plan"
          render={() => (
            <Meals />
          )}
        />
      </Router>
    );
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SelectPlan mealQty={mealQty} setMealQty={setMealQty} />;
      case 1:
        return <AddressForm />;
      case 2:
        return <PaymentForm />;
      case 3:
        return <Review mealQty={mealQty} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={mytheme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      > */}
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
                  <Button variant="contained" onClick={seeAllMeals} sx={{ mt: 3, ml: 1 }}>
                    See All Meals
                  </Button>
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
