"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import headerSlideMessages from "./messages";

const HeaderSlide = ({widthWindow} : number | any) => {
 
  //SLIDE
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction: string) => {
    switch (direction) {
      case "right":
        if (currentSlide === headerSlideMessages.length - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }

        break;

      case "left":
        if (currentSlide === 0) {
          setCurrentSlide(headerSlideMessages.length - 1);
        } else {
          setCurrentSlide(currentSlide - 1);
        }

        break;

      default:
        break;
    }
  };

  //INTERVAL CHANGES IN HEADER MESSAGE
  useEffect(() => {
    let interval: any;

    if (widthWindow < 760) {
      interval = setTimeout(() => 
        handleSlideChange("right"), 5000)
    } else {
      interval = null
    }
    return () => clearTimeout(interval);
    
  }, [currentSlide]);

  return (
    <div className="headerSlide_container">
      {/* BUTTON TO LEFT */}
      {widthWindow < 760 && (
        <button
          className="headerSlide_buttons"
          onClick={() => handleSlideChange("left")}
        >
          <img src="/images/icons/left.png" alt="leftarrow" />
        </button>
      )}

      <div className="slideGrid">
        {widthWindow < 760 ? (
          <div className="slideContainer">
            <img
              src={headerSlideMessages[currentSlide].ico}
              alt={headerSlideMessages[currentSlide].message}
            />
            <p>{headerSlideMessages[currentSlide].message}</p>
          </div>
        ) : (
          headerSlideMessages.map((msg, index) => (
            <div key={index} className="slideContainer">
              <img src={msg.ico} alt={msg.message} />
              <p>{msg.message}</p>
            </div>
          ))
        )}
      </div>

      {/* BUTTON TO RIGHT */}
      {widthWindow < 760 && (
        <button
          className="headerSlide_buttons"
          onClick={() => handleSlideChange("right")}
        >
          <img src="/images/icons/right.png" alt="leftarrow" />
        </button>
      )}
    </div>
  );
};
export default HeaderSlide;
