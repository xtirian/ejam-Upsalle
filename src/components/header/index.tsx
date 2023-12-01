"use client";
import React, { useEffect, useState } from "react";
import HeaderSlide from "../head-slide";

import "./style..scss";

const Header = () => {
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
