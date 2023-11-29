"use client";
import Image from "next/image";
import "./style.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const [widthFlag, setWidthFlag] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWidthFlag(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
  }, []);

  console.log(typeof widthFlag);

  return (
    <main className="main_container">
      <section className="main_sect">
        <h1 className="main_title">Wait ! your order in progress.</h1>
        
        <h2 className="main_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing </h2>
      </section>
    </main>
  );
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}
