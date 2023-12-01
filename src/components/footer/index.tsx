import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footerwrap">
      <footer className="footerContainer">
        <div>
          <p>Copyright (C) 2023</p>

          <span className="cardPattern1"></span>

          <p>clarifionsupport@clarifion.com</p>
        </div>
        <div>
          <img src="/images/icons/lock.png" alt="lockicon" />
          <p className="secureTextFooter">Secure 256-bit SSL encryption.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
