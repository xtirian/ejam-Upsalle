"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useState } from "react";
import CheckoutView from "@/view/checkout";

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
        <CheckoutView widthWindow={widthFlag} />
      </section>
    </main>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}
