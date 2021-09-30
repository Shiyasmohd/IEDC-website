import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './ImageSlider.css';
const ImageSlider = () => {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="/Images/img-1.jpg" className="sliderimg"/>
      <img src="/Images/img-2.jpg" className="sliderimg"/>
      <img src="/Images/img-3.jpg" className="sliderimg"/>
      <img src="/Images/img-4.jpg" className="sliderimg"/>
    </AliceCarousel>
    </div>
  );
}

export default ImageSlider;