/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, TextField, FormControlLabel, Checkbox,
} from '@mui/material';

const AddressForm = ({ address, setAddress }) => {
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  return (
    <>
      <Grid container sx={{ width: 500 }}>
        <Typography variant="h6" gutterBottom spacing={3}>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              variant="standard"
              value={address.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              variant="standard"
              value={address.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              variant="standard"
              value={address.address1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              variant="standard"
              value={address.address2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              variant="standard"
              value={address.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              value={address.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              variant="standard"
              value={address.zip}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              variant="standard"
              value={address.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

AddressForm.propTypes = {
  setAddress: PropTypes.func.isRequired,
  address: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    saveAddress: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AddressForm;
