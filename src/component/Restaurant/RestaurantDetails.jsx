import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=[
    "pizza",
    "biryani",
    "burger",
    "chicken"
]
const foodType=[
    {label:"All", value:"all"},
    {label:"Vegetarian only", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non_vegetarian"},
    {label:"Seasonal", value:"seasonal"}
]

const menu=[1,1,1,1]

const RestaurantDetails = () => {
    const [selectedFoodType, setSelectedFoodType]=useState("all")
    const [selectedCategory, setSelectedCategory] = useState("pizza")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
        if (e.target.name === "food_type") {
            setSelectedFoodType(e.target.value)
        } else if (e.target.name === "food_category") {
            setSelectedCategory(e.target.value)
        }
    }
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
            <Divider/>
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter ">
                    <div className="box space-y-5 lg:sticky top-28 ">
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={selectedFoodType}>
                                    {foodType.map((item) => (
                                        <FormControlLabel 
                                            key={item.value}
                                            value={item.value} 
                                            control={<Radio/>} 
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_category" value={selectedCategory}>
                                    {categories.map((item) => (
                                        <FormControlLabel 
                                            key={item}
                                            value={item} 
                                            control={<Radio/>} 
                                            label={item}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.map((item)=><MenuCard/>)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails