"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useState } from "react";
import CheckoutView from "@/view/checkout";
import ButtonGrid from "@/components/button-grid";
import CheckoutHead from "@/components/checkout-head";

export default function Home() {
  //HANDLE WIDTH RESIZE
  const [widthFlag, setWidthFlag] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWidthFlag(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
  }, []);

  //HANDLE STATUS



  return (
    <main className="main_container">
      <section className="main_sect">
        <h1 className="main_title">Wait ! your order in progress.</h1>

        <h2 className="main_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing </h2>
      </section>
      <section className="main_sect_checkout">
      <header>
        <CheckoutHead activeStep={2} widthWindow={widthFlag} />
      </header>
        <CheckoutView widthWindow={widthFlag} />

        <ButtonGrid  />
      </section>
    </main>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}
