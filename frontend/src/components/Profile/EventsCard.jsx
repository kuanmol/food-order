import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const EventsCard = () => {
    return (
        <Card sx={{ width: 325 }}>
            <CardMedia
                component="img"
                height="200"
                image="https://img.freepik.com/premium-photo/healthy-vegetable-salad-with-fresh-leaves-arugula-lettuce-spinach-vegan-salad-dark-background-top-view_89816-32060.jpg"
                alt="Salad Making"
            />
            <CardContent>

                <Typography variant="h5">
                    Salad Making
                </Typography>
                <Typography variant="body2">
                    Join and enjoy lol

                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{'delhi'}</p>
                    <p className='text-sm text-blue-500'>15 August, 2024 12:00PM</p>
                    <p className='text-sm text-red-500'>16 August, 2024 12:00PM</p>

                </div>
            </CardContent>
            {true && <CardActions>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </CardActions>}
        </Card>
    );
}

export default EventsCard;
