import { Chip, IconButton } from '@mui/material';
import React from 'react';

import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src="https://www.licious.in/blog/wp-content/uploads/2022/03/Licious-Holi-2022-009-1-min-1024x1024-1.jpg"
                        alt="Briyani" />
                </div>
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>Biryani</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton>
                                    <RemoveCircleOutline />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutline />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>$1200.99</p>
                </div>
            </div>
            <div className='pt-3 space-x-3'>
        {[1,1,1].map((item)=> <Chip label={" rice"}/>)}
            </div>
        </div>
    );
}

export default CartItem;
