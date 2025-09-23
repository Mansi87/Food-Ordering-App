import { Grid } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const RestaurantDetails = () => {
    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/india/Indian Fast Food/3</h3>
                <div>
                    <Grid container spacing={2} size={12}>
                        <Grid size={12}>
                            <img 
                                className='w-full h-[40vh] object-cover' 
                                src="https://cdn.pixabay.com/photo/2021/07/20/06/04/restaurant-6479818_1280.jpg" 
                                alt=""
                            />
                        </Grid>
                        <Grid size={6}>
                            <img 
                                className='w-full h-[40vh] object-cover' 
                                src="https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_1280.jpg" 
                                alt=""
                            />
                        </Grid>
                        <Grid size={6}>
                            <img 
                                className='w-full h-[40vh] object-cover' 
                                src="https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045_1280.jpg" 
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className="text-gray-500 mt-1">
                        Description about Restaurant
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center-gap-3">
                    <LocationOnIcon/>
                        <span>
                            Patna,Bihar
                        </span>
                    </p>
                    </div>
                    <p className="text-gray-500 flex items-center-gap-3">
                    <CalendarTodayIcon/>
                        <span>  
                            Mon-Sun: 9:00AM - 9:00PM(Today)
                        </span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails