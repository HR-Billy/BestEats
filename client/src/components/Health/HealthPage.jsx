import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import StyleLink from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HealthCard from './HealthCard.jsx';
import myTheme from '../theme.jsx';

const cards = [0, 1, 2, 3, 4, 5];

const cardLayout = [{
  image: 'https://images.unsplash.com/photo-1634128222851-7e62b3ef2680?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
  heading: 'Nutrition Calculator',
  description: 'Need more information about your meals? Get the nutrition facts here.',
},
{
  image: 'https://images.unsplash.com/photo-1587200292891-9b3a506060f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
  heading: 'Recipe Generator',
  description: 'Read up on recipes generated based on ingredients.',
},
{
  image: 'https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
  heading: 'Daily Habits',
  description: 'Develop new healthy habits for long-term success.',
},
{
  image: 'https://images.unsplash.com/photo-1623052946180-6b90ca971fe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
  heading: 'Eating Healthier',
  description: 'Explore new ways to enjoy your meals.',
},
{
  image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1744&q=80',
  heading: 'Fitness and Exercise',
  description: 'Find daily activities to increase your activity level and become more fit.',
},
{
  image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  heading: 'Additional Resources',
  description: 'Add to your knowledge by reading these resources recommended by nutritionists.',
},
];

const theme = createTheme(
  {
    typography: {
      h2: {
        fontSize: 36,
        marginbottom: 12,
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#609e00',
        light: '#B0C800',
      },
      secondary: {
        main: '#F24B6A',
      },
      success: {
        main: '#4caf50',
        light: '#B0C800',
      },
      //background: {
      //  default: '#FFDE32',
      //},
    },
  },
);

export default function HealthPage() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#FFDE32',
            pt: 8,
            pb: 1,
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
              <Link to="/meal-plan" style={{ textDecoration: 'none' }}>
                <Button variant="outlined">View our meals!</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} color="#FFDE32">
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
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <StyleLink color="inherit" href="/">
          Best Eats Inc.
        </StyleLink>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </ThemeProvider>
  );
}
