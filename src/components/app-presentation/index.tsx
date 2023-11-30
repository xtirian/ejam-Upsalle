import React from "react";
import "./style.scss";

const ClarifionPresentation = ({ widthWindow }: number | any) => {
  const star = 5;
  function starRate(stars: number) {
    let starNumber = [];
    for (let index = 0; index < stars; index++) {
      starNumber.push(<img src="/images/icons/star.png" alt="index" />);
    }

    return starNumber;
  }

  return (
    <div className="clarifion_presentation-container">
      <div className="clarifion_presentation">
        <div className="clarifion_imgContainer">
          <img
            src={
              widthWindow < 760
                ? "/images/mobile/hero/appProfile-mobile.png"
                : "/images/mobile/hero/appprofile.png"
            }
            alt=""
          />
        </div>
        <div className="clarifion_content">
          <h3>Clarifion Air Ionizer</h3>
          <div className="star_container">{starRate(5)}</div>
          <div className="clarifion_textStock">
            <span className="spanStock"></span>

            <p>12 left in Stock</p>
          </div>

          <div className="price_container">
            <span className="oldPrice">$180</span>
            <span className="newPrice">$84</span>
          </div>
        </div>
      </div>

      <p className="app_text_content">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>

      <ul className="list_app_content">
        <li>
          <img src="/images/icons/check1.png" alt="" />
          <span>
            Negative Ion Technology may <b>help with allergens</b>
          </span>
        </li>
        <li>
          <img src="/images/icons/check1.png" alt="" />
          <span>
            Designed for <b>air rejuvenation</b>
          </span>
        </li>
        <li>
          <img src="/images/icons/check1.png" alt="" />
          <span>
            <b>Perfect for every room</b> in all types of places.
          </span>
        </li>
      </ul>

      <div className="app_discount">
        <span className="discount_pattern">%</span>
        <p className="discount_contetn">Save <span>53%</span> and get <span>6 extra Clarifision</span> {widthWindow < 500 && <br/>}for only <span>$14 Each</span>.</p>
      </div>
    </div>
  );
};

export default ClarifionPresentation;
