'use client';
import React from 'react'
import './style.scss'

const ButtonGrid = ({widthWindow, changeView}: number| any) => {

  //TODO pass the info of display to parent by clicking in button
  return (
    <div className='buttons_container'>
      <button className='confirmButton' onClick={() => changeView("")}>
        YES - CLAIM MY DISCOUNT <img src="/images/icons/arrow.png" alt="arrow" />
      </button>

      <div className='secureInfo_card'>
        <div>
          <p>Free shipping</p>

          <span className='cardPattern1'>

          </span>

          <p>
          Secure 256-bit SSL encryption
          </p>
          </div>
          
          <span className={widthWindow < 760? "cardPattern2": "cardPattern1"}></span>
          <img src="/images/CardsFlag.png" alt="cardsflag" className='cardsFlagImg' />
      </div>

      <button className='returnButton' onClick={() => changeView("return")}>No thanks, I don’t want this.</button>

      <div className='satisfactionGrid'>
        <img src="/images/desktop/satisfaction.png" alt="" />
        <div>
          <p>
          If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ButtonGrid