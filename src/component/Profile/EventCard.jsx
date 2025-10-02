import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const EventCard = () => {
    return (
        <div>
            <Card sx={{width:345}}>
                <CardMedia sx={{height:345}}
                 image='https://cdn.pixabay.com/photo/2014/04/23/11/37/rooftop-restaurant-330474_1280.jpg'/>
                 <CardContent>
                    <Typography variant='h5'>
                        Indian Fast Food
                    </Typography>
                    <Typography variant='body2'>
                        Rooftop Food Tasting
                        50% Off on everything
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"Purnia"}</p>
                        <p className="text-sm text-blue-500">October 3, 2025 12:00 AM</p>
                        <p className="text-sm text-red-800">October 5, 2025 18:00 PM</p>
                    </div>
                 </CardContent>

                {false && <CardActions>
                    <IconButton>
                        <DeleteOutlineIcon/>
                    </IconButton>
                 </CardActions>}
            </Card>
        </div>
    )
}