"use client";
import React, { useEffect, useState } from "react";
import Checker from "../checkout-checker";

import './style.scss';

const CheckoutHead = ({ widthWindow, activeStep }: number | any) => {

  const [activeView, setActiveView] = useState(activeStep);

  useEffect(() => {
    if(activeView){
      setActiveView(activeStep)
    }
  
    
  }, [activeStep])
  

  const handleStatus = (userChecker : number) => {

    let result;

    if(userChecker < activeView) {
      result = "completed"
    } else if ( userChecker === activeStep){
      result = "active"
    } else if ( userChecker > activeStep ){
      result = ""
    }

    return result;
  }


  return (
    <div className="checkout_head_container">
      <div className={`checkout_head_card`}>
       <Checker status={handleStatus(0)} number={1} text="Cart Review" />
      </div>
      
      <div className={`checkout_head_card`}>
       <Checker status={handleStatus(1)} number={2} text="Checkout" />
      </div>
      
      <div className={`checkout_head_card`}>
       <Checker status={handleStatus(2)} number={3} 
       text="Special Offer"
       />       
      </div>
      
      <div className={`checkout_head_card`}>
       <Checker status={handleStatus(3)} number={4} text="Confirmation" />
      </div>
      
    </div>
  );
};

export default CheckoutHead;
