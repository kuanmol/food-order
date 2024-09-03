import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

const AddressCart = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card className="flex gap-5 w-64 p-5 items-start">
            <HomeIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>
                    Delhi, Chandni Chowk,<br />
                    Paratha Gali,<br />
                    110897, India
                </p>
                {showButton && (
                    <Button variant='outlined' fullWidth onClick={() => handleSelectAddress(item)}>
                        Select
                    </Button>
                )}
            </div>
        </Card>
    );
}

export default AddressCart;
