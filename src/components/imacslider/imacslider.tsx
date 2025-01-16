// import React from "react";
// import './test.css';

// function Test() {
//   return (
//     <div className="imac flex justify-center">
//       <div className="slidetrangchu">
//         <section class="carousel" aria-label="Gallery">
//   <ol class="carousel__viewport">
//     <li id="carousel__slide1"
//         tabindex="0"
//         class="carousel__slide">
//       <div class="carousel__snapper">
//         <a href="#carousel__slide4"
//            class="carousel__prev">Go to last slide</a>
//         <a href="#carousel__slide2"
//            class="carousel__next">Go to next slide</a>
//       </div>
//     </li>
//     <li id="carousel__slide2"
//         tabindex="0"
//         class="carousel__slide">
//       <div class="carousel__snapper"></div>
//       <a href="#carousel__slide1"
//          class="carousel__prev">Go to previous slide</a>
//       <a href="#carousel__slide3"
//          class="carousel__next">Go to next slide</a>
//     </li>
//     <li id="carousel__slide3"
//         tabindex="0"
//         class="carousel__slide">
//       <div class="carousel__snapper"></div>
//       <a href="#carousel__slide2"
//          class="carousel__prev">Go to previous slide</a>
//       <a href="#carousel__slide4"
//          class="carousel__next">Go to next slide</a>
//     </li>
//     <li id="carousel__slide4"
//         tabindex="0"
//         class="carousel__slide">
//       <div class="carousel__snapper"></div>
//       <a href="#carousel__slide3"
//          class="carousel__prev">Go to previous slide</a>
//       <a href="#carousel__slide1"
//          class="carousel__next">Go to first slide</a>
//     </li>
//   </ol>
//   <aside class="carousel__navigation">
//     <ol class="carousel__navigation-list">
//       <li class="carousel__navigation-item">
//         <a href="#carousel__slide1"
//            class="carousel__navigation-button">Go to slide 1</a>
//       </li>
//       <li class="carousel__navigation-item">
//         <a href="#carousel__slide2"
//            class="carousel__navigation-button">Go to slide 2</a>
//       </li>
//       <li class="carousel__navigation-item">
//         <a href="#carousel__slide3"
//            class="carousel__navigation-button">Go to slide 3</a>
//       </li>
//       <li class="carousel__navigation-item">
//         <a href="#carousel__slide4"
//            class="carousel__navigation-button">Go to slide 4</a>
//       </li>
//     </ol>
//   </aside>
// </section>
//       </div>
//       </div>
//   );
  
// }

// imacsliderault Test;


import './imacslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function ImacSlider() {
  var settings = {
    dots: true,
  };
  return (
    <div className="imac flex justify-center">
     <div className="slidetrangchu">
        
     <Slider {...settings}>
          <div className="img">
            <img src="https://placehold.co/800x400.png" />
          </div>
          <div className="img">
            <img src="https://placehold.co/600x400.png" />
          </div>
          <div className="img">
            <img src="https://placehold.co/600x400.png" />
          </div>
          <div className="img">
            <img src="https://placehold.co/600x400.png" />
          </div>
        </Slider>
    </div>
    </div>
  );
}

export default ImacSlider;