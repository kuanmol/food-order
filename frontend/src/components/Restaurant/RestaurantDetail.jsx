import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action';

const categories = ["pizza", "briyani", "burger", "sandwich", "chicken"];
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-vegetarian only", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" }
];
const menu = [1, 1, 1, 1, 1];

const RestaurantDetail = () => {
    const [foodType, setFoodType] = useState("all");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const { auth, restaurant } = useSelector(store => store);
    const { id, city } = useParams();

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
    };

    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
    }, []);

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[45vh] object-cover'
                                src={restaurant.restaurant?.images[0]}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[1]}

                                alt='Food Image 1'
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[2]}
                                alt='Food Image 2'
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className="text-4xl font-semibold">{restaurant.restaurant?.name}</h1>
                    <p className='text-gray-500 mt-1'>{restaurant.restaurant?.description}</p>
                    <div className='space-y-3 mt-3'>
                        <div className='text-gray-500 flex items-center gap-2'>
                            <LocationOnIcon />
                            <span>Delhi , Bindapur</span>
                        </div>
                        <div className='text-gray-500 flex items-center gap-2'>
                            <CalendarTodayIcon />
                            <span>Mon - Sun: 9:00 AM - 9:00 PM (Today)</span>
                        </div>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-8 lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter '>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>Food Type</Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />


                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>Food Category</Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_category" value={foodType}>
                                    {categories.map((item) => (
                                        <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item) => <MenuCard key={item} />)}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetail;
