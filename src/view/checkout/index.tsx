'use client';
import CheckoutHead from '@/components/checkout-head'
import React from 'react'

const CheckoutView = ({widthWindow} : number | any) => {
  return (
    <div>      
      <CheckoutHead activeStep={2} widthWindow={widthWindow} />
      Checkout
    </div>
  )
}

export default CheckoutView