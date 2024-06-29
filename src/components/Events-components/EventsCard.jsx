import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EventsCard({ image, title, data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Event Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} {/* Display the title prop */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data} {/* Display the data prop */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
