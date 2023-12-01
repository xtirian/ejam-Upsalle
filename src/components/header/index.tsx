"use client";
import React, { useEffect, useState } from "react";
import HeaderSlide from "../head-slide";

import "./style..scss";



const Header = () => {

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

  return (
    <header>
      <HeaderSlide widthWindow={widthFlag} />
      {widthFlag < 760 ? (
        <div className="logoContainer">
          <img src="/images/mobile/logo-mobile.png" alt="" />
          <img src="/images/mobile/MacFree.png" alt="" />
        </div>
      ) : (
        <div className="logoContainer">
          <img src="/images/desktop/clarifion-logo.png" alt="" />
          <img src="/images/desktop/macfree-norton.png" alt="" />
        </div>
      )}
    </header>
  );
};

export default Header;
