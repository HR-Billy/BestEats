import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review({ mealPlan, fullAddress, paymentInfo }) {
  const products = [
    {
      name: `${mealPlan.mealQty} meals per week`,
      price: `$${mealPlan.planPrice}`,
    },
    {
      name: 'Tax',
      price: `$${mealPlan.tax}`,
    },
    {
      name: 'Shipping',
      price: `$${mealPlan.shipping}`,
    },
  ];

  const streetAddress = fullAddress.address2 === '' ? fullAddress.address1 : `${fullAddress.address1}, ${fullAddress.address2}`;

  const cityStateZipCountry = [
    fullAddress.city,
    fullAddress.state,
    fullAddress.zip,
    fullAddress.country,
  ];
  const payments = [
    { name: 'Card holder', detail: paymentInfo.cardName },
    { name: 'Card number', detail: paymentInfo.cardNumber },
    { name: 'Expiry date', detail: paymentInfo.expDate },
  ];
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $
            {mealPlan.total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${fullAddress.firstName} ${fullAddress.lastName}`}</Typography>
          <Typography gutterBottom>{streetAddress}</Typography>
          <Typography gutterBottom>{cityStateZipCountry.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
