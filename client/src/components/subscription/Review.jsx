/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, List, ListItem, ListItemText,
} from '@mui/material';

const Review = ({ mealPlan, address, payment }) => {
  const prices = [
    {
      name: `${mealPlan.mealQty} meals per week`,
      price: mealPlan.planPrice,
    },
    {
      name: 'Tax',
      price: mealPlan.tax,
    },
    {
      name: 'Shipping',
      price: mealPlan.shipping,
    },
  ];

  const streetAddress = address.address2 === '' ? address.address1 : `${address.address1}, ${address.address2}`;

  const cityStateZipCountry = [
    address.city,
    address.state,
    address.zip,
    address.country,
  ];
  const payInfo = [
    { name: 'Card holder', detail: payment.cardName },
    { name: 'Card number', detail: payment.cardNumber },
    { name: 'Expiry date', detail: `${payment.exMonth}/${payment.exYear}` },
  ];
  return (
    <>
      <Grid container sx={{ width: 500 }}>
        <Grid item sx={{ width: 1, pr: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ width: 1 }}>
            Order summary
          </Typography>
          <List disablePadding>
            {prices.map((item) => (
              <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={item.name} secondary={item.desc} />
                <Typography variant="body2">
                  $
                  {parseFloat(item.price).toFixed(2)}
                </Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                $
                {parseFloat(mealPlan.total).toFixed(2)}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid container spacing={2} sx={{ width: 1 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
            <Typography gutterBottom>{`${address.firstName} ${address.lastName}`}</Typography>
            <Typography gutterBottom>{streetAddress}</Typography>
            <Typography gutterBottom>{cityStateZipCountry.join(', ')}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6} sx={{ pl: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Payment details
            </Typography>
            <Grid container>
              {payInfo.map((info) => (
                <React.Fragment key={info.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{info.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{info.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

Review.propTypes = {
  mealPlan: PropTypes.shape({
    mealQty: PropTypes.number.isRequired,
    planPrice: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    shipping: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
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

export default Review;
