"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import headerSlideMessages from "./messages";
import { setInterval } from "timers";

const HeaderSlide = () => {
  //WINDOW RESIZE HANDLE
  const [widthFlag, setWidthFlag] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWidthFlag(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
  }, []);

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
    

    const startInterval = () => {
      let interval;
      clearInterval(interval)
      interval = setInterval( () => handleSlideChange("right"), 5000);      
      
}
    if (widthFlag < 760) {      
        startInterval()
    }
  }, [currentSlide]);

  return (
    <div className="headerSlide_container">
      {/* BUTTON TO LEFT */}
      {widthFlag < 760 && (
        <button
          className="headerSlide_buttons"
          onClick={() => handleSlideChange("left")}
        >
          <img src="/images/icons/left.png" alt="leftarrow" />
        </button>
      )}

      <div className="slideGrid">
        {widthFlag < 760 ? (
          <div className="slideContainer">
            <img
              src={headerSlideMessages[currentSlide].ico}
              alt={headerSlideMessages[currentSlide].message}
            />
            <p>{headerSlideMessages[currentSlide].message}</p>
          </div>
        ) : (
          headerSlideMessages.map(msg => <div className="slideContainer">
          <img
            src={msg.ico}
            alt={msg.message}
          />
          <p>{msg.message}</p>
        </div>)
        )}
      </div>

      {/* BUTTON TO RIGHT */}
      {widthFlag < 760 && (
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

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}

export default HeaderSlide;
