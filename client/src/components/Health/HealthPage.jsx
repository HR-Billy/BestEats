import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HealthCard from './HealthCard.jsx';

const cards = [0, 1, 2];

const cardLayout = [{
  image: 'https://images.unsplash.com/photo-1634128222851-7e62b3ef2680?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
  heading: 'Nutrition Calculator',
  description: 'Get the nutrition facts for your meal.',
},
{
  image: 'https://images.unsplash.com/photo-1587200292891-9b3a506060f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
  heading: 'Recipe Generator',
  description: 'Generate a recipe based on ingredients',
},
{
  image: 'https://images.unsplash.com/photo-1634128222851-7e62b3ef2680?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
  heading: 'Nutrition Calculator',
  description: '',
}];

const theme = createTheme();

export default function HealthPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Let&apos;s get healthy!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Learn from nutritionists and create a food plan that works for you.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link to="/subscribe" style={{ textDecoration: 'none' }}>
                <Button variant="contained">Become a member</Button>
              </Link>
              <Button variant="outlined">View our meals!</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <HealthCard
                  image={cardLayout[card].image}
                  heading={cardLayout[card].heading}
                  description={cardLayout[card].description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      End footer */}
    </ThemeProvider>
  );
}
