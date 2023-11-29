'use client';
import React, { useEffect, useState } from 'react'
import HeaderSlide from '../head-slide'

import './style..scss'

const Header = () => {
  const [widthFlag, setWidthFlag] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWidthFlag(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
  }, []);

  console.log( typeof widthFlag)


  return (
    <header>
      <HeaderSlide widthWindow={widthFlag} />
      {
        widthFlag < 760? <div className='logoContainer'>
        <img src="/images/mobile/logo-mobile.png" alt="" />
          <img src="/images/mobile/MacFree.png" alt="" />
        </div> :
        <div className='logoContainer'>
        <img src="/images/desktop/clarifion-logo.png" alt="" />
          <img src="/images/desktop/macfree-norton.png" alt="" />
        </div>
      }
      
      </header>
  )
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}


export default Header