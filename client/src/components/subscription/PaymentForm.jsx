/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const PaymentForm = ({ address, payment, setPayment }) => {
  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  const renderBillingAddress = () => {
    if (!address.saveAddress) {
      return (
        <>
          <Typography variant="h6" gutterBottom spacing={3}>
            Billing Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="billing_firstName"
                name="billing_firstName"
                label="First name"
                fullWidth
                variant="standard"
                value={payment.billing_firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="billing_lastName"
                name="billing_lastName"
                label="Last name"
                fullWidth
                variant="standard"
                value={payment.billing_lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="billing_address1"
                name="billing_address1"
                label="Address line 1"
                fullWidth
                variant="standard"
                value={payment.billing_address1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="billing_address2"
                name="billing_address2"
                label="Address line 2"
                fullWidth
                variant="standard"
                value={payment.billing_address2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="billing_city"
                label="City"
                fullWidth
                variant="standard"
                value={payment.billing_city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="billing_state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
                value={payment.billing_state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="billing_zip"
                label="Zip / Postal code"
                fullWidth
                variant="standard"
                value={payment.billing_zip}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="billing_country"
                name="billing_country"
                label="Country"
                fullWidth
                variant="standard"
                value={payment.billing_country}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </>
      );
    }
    return '';
  };

  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i += 1) {
      years.push(currentYear + i);
    }
    return years.map((year) => <MenuItem key={year} value={year.toString()}>{year}</MenuItem>);
  };

  return (
    <>
      <Grid container sx={{ width: 500 }}>
        {renderBillingAddress()}
        <Grid container sx={{ width: 500, mt: 6 }}>
          <Typography variant="h6" gutterBottom spacing={3}>
            Payment method
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                name="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                value={payment.cardName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                name="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
                value={payment.cardNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel id="expDate" sx={{ mt: 2, mb: 1 }}>Expiry Date</InputLabel>
              <Select
                required
                id="exMonth"
                name="exMonth"
                value={payment.exMonth}
                onChange={handleChange}
                sx={{ width: '48%' }}
              >
                <MenuItem value="0">Month</MenuItem>
                <MenuItem value="01">January</MenuItem>
                <MenuItem value="02">February</MenuItem>
                <MenuItem value="03">March</MenuItem>
                <MenuItem value="04">April</MenuItem>
                <MenuItem value="05">May</MenuItem>
                <MenuItem value="06">June</MenuItem>
                <MenuItem value="07">July</MenuItem>
                <MenuItem value="08">August</MenuItem>
                <MenuItem value="09">September</MenuItem>
                <MenuItem value="10">October</MenuItem>
                <MenuItem value="11">November</MenuItem>
                <MenuItem value="12">December</MenuItem>
              </Select>
              <Select
                required
                id="exYear"
                name="exYear"
                value={payment.exYear}
                onChange={handleChange}
                sx={{ width: '44%', ml: 1 }}
              >
                <MenuItem value="0">Year</MenuItem>
                {generateYears()}
              </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                name="cvv"
                label="CVV"
                helperText="Three digit number on the back of Visa/MC/Disc or 4 digit number on the front of Amex"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
                value={payment.cvv}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Remember credit card details for next time"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

PaymentForm.propTypes = {
  setPayment: PropTypes.func.isRequired,
  address: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    saveAddress: PropTypes.bool.isRequired,
  }).isRequired,
  payment: PropTypes.shape({
    billing_firstName: PropTypes.string.isRequired,
    billing_lastName: PropTypes.string.isRequired,
    billing_address1: PropTypes.string.isRequired,
    billing_address2: PropTypes.string,
    billing_city: PropTypes.string.isRequired,
    billing_state: PropTypes.string.isRequired,
    billing_zip: PropTypes.string.isRequired,
    billing_country: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    exMonth: PropTypes.string.isRequired,
    exYear: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
    saveCard: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PaymentForm;
