"use client";
import CheckoutHead from "@/components/checkout-head";
import React from "react";

import './style.scss';
import ClarifionPresentation from "@/components/app-presentation";

const SpecialOffer = ({ widthWindow }: number | any) => {




  return (
    <section className="checkoutView_container">      

      <h2 className="subtitle_page">
        <span className="title_emphasis">ONE TIME ONLY</span> special price for
        6 extra Clarifion for only{" "}
        <span className="title_emphasis">$14 each</span> ($84.00 total!)
      </h2>

      {widthWindow < 760 && <img src="/images/mobile/hero/hero-mobile.png" alt="hero-mobile" className="heroimg-mobile" /> }

      <ClarifionPresentation widthWindow={widthWindow} />

      




      
    </section>
  );
};

export default SpecialOffer;
