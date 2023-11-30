"use client";
import React from "react";
import Checker from "../checkout-checker";

import './style.scss';

const CheckoutHead = ({ widthWindow, activeStep }: number | any) => {
  return (
    <div className="checkout_head_container">
      <div className={`checkout_head_card`}>
       <Checker status="completed" number={1} text="Cart Review" />
      </div>
      
      <div className={`checkout_head_card`}>
       <Checker status="completed" number={2} text="Checkout" />
      </div>
      
      <div className={`checkout_head_card`}>
       <Checker status="active" number={3} 
       text="Special Offer"
       />       
      </div>
      
      <div className={`checkout_head_card`}>
       <Checker status="" number={4} text="Confirmation" />
      </div>
      
    </div>
  );
};

export default CheckoutHead;
