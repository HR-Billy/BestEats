/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, CssBaseline, Typography, Grid, Box, Container, Paper, Stepper, Step, StepLabel, Button } from '@mui/material';
import StyleLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import SelectPlan from './SelectPlan.jsx';
import AddressForm from './AddressForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Review from './Review.jsx';
import myTheme from '../theme.jsx';

const Copyright = () => (
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

const Subscribe = () => {
  const steps = ['Select Plan', 'Shipping', 'Payment', 'Select Your Meals'];

  const [activeStep, setActiveStep] = useState(0);
  const [mealPlan, setMealPlan] = useState('');

  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    saveAddress: false,
  });

  const [payment, setPayment] = useState({
    billing_firstName: '',
    billing_lastName: '',
    billing_address1: '',
    billing_address2: '',
    billing_city: '',
    billing_state: '',
    billing_zip: '',
    billing_country: '',
    cardName: '',
    cardNumber: '',
    exMonth: '0',
    exYear: '0',
    cvv: '',
    saveCard: false,
  });

  const updateBillingInfo = () => {
    if (address.saveAddress) {
      setPayment({
        billing_firstName: address.firstName,
        billing_lastName: address.lastName,
        billing_address1: address.address1,
        billing_address2: address.address2,
        billing_city: address.city,
        billing_state: address.state,
        billing_zip: address.zip,
        billing_country: address.country,
        cardName: '',
        cardNumber: '',
        exMonth: '',
        exYear: '',
        cvv: '',
        saveCard: false,
      });
    }
  };

  useEffect(() => updateBillingInfo(), [address.saveAddress]);

  let errorMessage = 'complete all required fields';

  const validate = (step) => {
    let result = true;
    switch (step) {
      case 0:
        if (mealPlan === '') {
          errorMessage = 'select a meal plan';
          result = false;
        }
        return result;
      case 1:
        if (address === '') {
          errorMessage = 'complete all required address fields';
          result = false;
        } else {
          Object.entries(address).forEach((entry) => {
            console.log(entry[1]);
            if (entry[0] !== 'address2') {
              if (entry[1] === '') {
                errorMessage = 'complete all required address fields';
                result = false;
              }
            }
          });
        }
        return result;
      case 2:
        if (payment === '') {
          errorMessage = 'complete all required payment fields';
          result = false;
        } else {
          Object.entries(payment).forEach((entry) => {
            if (entry[1] === '') {
              errorMessage = 'complete all required payment fields';
              result = false;
            }
          });
        }
        return result;
      default:
        return result;
    }
  };

  const handleNext = () => {
    if (validate(activeStep)) {
      setActiveStep(activeStep + 1);
    } else {
      alert(`Please ${errorMessage} to continue.`);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SelectPlan setMealPlan={setMealPlan} />;
      case 1:
        return <AddressForm address={address} setAddress={setAddress} />;
      case 2:
        return <PaymentForm address={address} payment={payment} setPayment={setPayment} />;
      case 3:
        return <Review mealPlan={mealPlan} address={address} payment={payment} />;
      default:
        throw new Error('Unknown step');
    }
  };

  // this function will send all user info to the database
  const saveUserInfo = () => {
    let savedCardName;
    let savedCardNumber;
    let savedExpDate;
    let savedCvv;
    if (payment.saveCard) {
      savedCardName = payment.cardName;
      savedCardNumber = payment.cardNumber;
      savedExpDate = `${payment.exMonth}-${payment.exYear}`;
      savedCvv = payment.cvv;
    } else {
      savedCardName = null;
      savedCardNumber = null;
      savedExpDate = null;
      savedCvv = null;
    }
    const userInfo = {
      subscription_date: new Date(),
      meals_per_week: mealPlan.mealQty,
      first_name: address.firstName,
      last_name: address.lastName,
      // email: address.email,
      // phone: address.phone,
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country,
      cardholder_name: savedCardName,
      cc_number: savedCardNumber,
      cc_exp: savedExpDate,
      cvv: savedCvv,
    };
    // console.log(userInfo);
    axios.post('/api/users', userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);
  };

  return (
    <ThemeProvider theme={myTheme}>
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
                {saveUserInfo()}
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
                <Grid container justifyContent="center" alignItems="center">
                  {getStepContent(activeStep)}
                </Grid>
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
};

export default Subscribe;
