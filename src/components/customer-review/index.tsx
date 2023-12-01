import React from "react";
import "./style.scss";

const CustomerCard = () => {
  function starRate(stars: number) {
    let starNumber = [];
    for (let index = 0; index < stars; index++) {
      starNumber.push(
        <img
          key={index}
          src="/images/icons/star.png"
          alt="index"
          className="starRate"
        />
      );
    }

    return starNumber;
  }

  return (
    <div className="customerCard_container">
      <div className="customer_grid">
        <img
          src="/images/desktop/customer.png"
          alt="customer"
          className="customerAvatar"
        />
        <div className="customer_name_grid">
          {starRate(5)}
          <p className="customer_name">
            Ken T.{" "}
            <img
              src="/images/icons/verified.png"
              alt="verifyIcon"
              className="verifiedIcon"
            />{" "}
            <span>Verified Customer</span>
          </p>
        </div>
      </div>
      <p className="customer_comment">
        
          "As soon as the Clarifions arrived I put one in my bedroom. This was
          late in the afternoon. When I went to the bedroom in the evening it
          smelled clean. When I went to bed I felt I could breathe better.
          Wonderful.”
        </p>
 
    </div>
  );
};

export default CustomerCard;
