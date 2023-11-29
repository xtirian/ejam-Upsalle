'use client';
import React from 'react'

const CheckoutHead = ({widthWindow, activeStep} : number | any )  => {

  

  return (

    <div className='checkout_head_container'>
      <div className={`checkout_head_card`}>
        <img src="/images/icons/check2.png" alt="" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default CheckoutHead