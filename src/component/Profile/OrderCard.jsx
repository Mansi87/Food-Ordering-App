import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
    return (
      <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className= "h-16 w-16"
            src="https://cdn.pixabay.com/photo/2020/10/17/11/06/pizza-5661748_1280.jpg" alt=""/>
            <div>
                <p>Veg Pizza</p>
                <p>₹409</p>
            </div>
        </div>
        <div>
            <Button  className="cursor-not-allowed">completed</Button>
        </div>
      </Card>
    )
}