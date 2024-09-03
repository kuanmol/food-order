import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img
                    className="h-16 w-16" src='https://images.services.kitchenstories.io/oR0QlV_BJQq6E3KO86G7GBsNm3c=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2121_smash_burger_title.jpg' alt='' />
                <div>
                    <p>Biryani</p>
                    <p>$129</p>
                </div>
            </div>
            <div>
                <Button className='cursor-not-allowed'>completed</Button>
            </div>

        </Card>
    )
}

export default OrderCard