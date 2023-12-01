"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useState } from "react";
import ButtonGrid from "@/components/button-grid";
import CheckoutHead from "@/components/checkout-head";
import SpecialOffer from "@/view/special-offer";
import CheckoutView from "@/view/checkout-view";
import ConfirmationView from "@/view/confirmation";
import CustomerCard from "@/components/customer-review";

export default function Home() {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  const [widthFlag, setWidthFlag] = useState(innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthFlag(innerWidth);
    }

    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize);
    }
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
          <ButtonGrid key={2} changeView={changeView} />,
        ];
        break;

      case "Special Offer":
        result = [
          <SpecialOffer key={1} widthWindow={widthFlag} />,
          <ButtonGrid key={2} changeView={changeView} />,
        ];
        break;

      case "Confirmation":
        result = [
          <ConfirmationView key={1} />,
          <ButtonGrid key={2} changeView={changeView} />,
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
    <main className="main_container">
      <section className="main_sect">
        <h1 className="main_title">Wait ! your order in progress.</h1>

        <h2 className="main_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </h2>
      </section>
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
    </main>
  );
}
