import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function PaymentForm({ address, payment, setPayment }) {
  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  const renderBillingAddress = () => {
    if (!address.saveAddress) {
      return (
        <>
          <Typography variant="h6" gutterBottom>
            Billing Address
          </Typography>
          <Grid container spacing={3} gutterBottom>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="billing_firstName"
                name="billing_firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
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
                autoComplete="family-name"
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
                autoComplete="billing address-line1"
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
                autoComplete="billing address-line2"
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
                autoComplete="billing address-level2"
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
                autoComplete="billing postal-code"
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
                autoComplete="billing country"
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

  return (
    <>
      <Grid container sx={{ width: 500 }}>
        {renderBillingAddress()}
        <Grid container sx={{ width: 500 }}>
          <Typography variant="h6" gutterBottom>
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
            <InputLabel id="expDate" name="expDate" label="Expiry date">Expiry Date</InputLabel>
            <Select
              item
              xs={6}
              md={3}
              required
              id="exMonth"
              label="Select a month"
              name="exMonth"
              value={payment.exMonth}
              onChange={handleChange}
            >
              <MenuItem value="0">Enter month</MenuItem>
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
              item
              xs={6}
              md={3}
              required
              id="exYear"
              label="Select a year"
              name="exYear"
              value={payment.exYear}
              onChange={handleChange}
            >
              <MenuItem value="0">Enter year</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2025">2025</MenuItem>
              <MenuItem value="2026">2026</MenuItem>
              <MenuItem value="2027">2027</MenuItem>
              <MenuItem value="2028">2028</MenuItem>
              <MenuItem value="2029">2029</MenuItem>
              <MenuItem value="2030">2030</MenuItem>
              <MenuItem value="2031">2031</MenuItem>
            </Select>
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
}
