

import './iphoneslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function IphoneSlider() {
  var settings = {
    dots: true,
  };
  return (
    <div className="iphone self-stretch justify-center items-center inline-flex">
     <div className="slidetrangchu self-stretch justify-center inline-flex">
        
     <Slider {...settings}>
          <div className="img">
            <img src={require("../../images/slide1.png")} />
          </div>
          <div className="img">
          <img src={require("../../images/slide2.png")} />
          </div>
          <div className="img">
          <img src={require("../../images/slide3.png")} />
          </div>
          <div className="img">
          <img src={require("../../images/slide4.png")} />
          </div>
        </Slider>
    </div>
    </div>
  );
}

export default IphoneSlider;