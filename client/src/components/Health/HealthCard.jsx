import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function HealthCard({ heading, description, image }) {
  return (
    <>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: "#BDF6FC"}}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '10%',
          }}
          image={image}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" color="#F24B6A">
            {heading}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Coming Soon</Button>
        </CardActions>
      </Card>
    </>
  );
}
