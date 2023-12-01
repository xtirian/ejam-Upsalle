"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";

const ButtonGrid = ({ changeView }: number | any) => {

  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthWindow(window.innerWidth);
    }

    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <div className="buttons_container">
      <button className="confirmButton" onClick={() => changeView("")}>
        YES - CLAIM MY DISCOUNT{" "}
        <img src="/images/icons/arrow.png" alt="arrow" />
      </button>

      <div className="secureInfo_card">
        <div>
          <p>Free shipping</p>

          <span className="cardPattern1"></span>

          <p>Secure 256-bit SSL encryption</p>
        </div>
        {widthWindow < 760 ? (
          <span className="cardPattern2"></span>
        ) : (
          <span className="cardPattern1"></span>
        )}

        <img
          src="/images/CardsFlag.png"
          alt="cardsflag"
          className="cardsFlagImg"
        />
      </div>

      <button className="returnButton" onClick={() => changeView("return")}>
        No thanks, I don’t want this.
      </button>

      <div className="satisfactionGrid">
        <img src="/images/desktop/satisfaction.png" alt="" />
        <div>
          <p>
            If you are not completely thrilled with your Clarifion - We have a{" "}
            <b>30 day satisfaction guarantee</b>. Please refer to our return
            policy at the bottom of the page for more details. Happy Shopping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;
