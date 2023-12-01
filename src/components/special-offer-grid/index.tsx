"use client";
import React, { useEffect, useState } from "react";
import ConfirmationView from "@/view/confirmation";
import SpecialOffer from "@/view/special-offer";
import CheckoutView from "@/view/checkout-view";
import CheckoutHead from "../checkout-head";
import CustomerCard from "../customer-review";

const DynamicButtonGrid = dynamic(()=> import('@/components/button-grid/index'), {
  ssr: false
})

import "./style.scss";
import dynamic from "next/dynamic";

const ConfirmationGrid = () => {
  const [widthFlag, setWidthFlag] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthFlag(window.innerWidth);
    }

    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //HANDLE VIEW
  const listOfViews = [
    "Cart Review",
    "Checkout",
    "Special Offer",
    "Confirmation",
  ];

  const [view, setView] = useState(2);

  const changeView = (direction: string) => {
    if (direction === "return") {
      if (view - 1 >= 0) {
        setView(view - 1);
      }
    } else {
      if (view + 1 <= listOfViews.length - 1) {
        setView(view + 1);
      }
    }
  };

  function showView() {
    const data = listOfViews[view];
    let result;

    switch (data) {
      case "Checkout":
        result = [
          <CheckoutView key={1} />,
          <DynamicButtonGrid
            key={2}
            changeView={changeView}
          />,
        ];
        break;

      case "Special Offer":
        result = [
          <SpecialOffer key={1} widthWindow={widthFlag} />,
          <DynamicButtonGrid
            key={2}
            changeView={changeView}
          />,
        ];
        break;

      case "Confirmation":
        result = [
          <ConfirmationView key={1} />,
          <DynamicButtonGrid
            key={2}
            changeView={changeView}
          />,
        ];
        break;

      default:
        break;
    }

    return result;
  }

  const [currentView, setCurrentView] = useState(showView);

  useEffect(() => {
    if (view) {
      setCurrentView(showView);
    }
  }, [view]);

  return (
    <section className="main_sect_checkout">
      <header>
        <CheckoutHead activeStep={view} widthWindow={widthFlag} />
      </header>
      <div className="view_sect_container">
        {widthFlag > 760 && (
          //TODO
          <div className="heroContainer">
            <img
              src="/images/desktop/hero/hero1.png"
              alt="hero1"
              className="hero1_image_desktop"
            />

            {/* customer review card */}
            <CustomerCard />
          </div>
        )}
        <div className="current_view_div">{currentView}</div>
      </div>
    </section>
  );
};

export default ConfirmationGrid;
