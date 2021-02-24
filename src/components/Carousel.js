import React, { useState } from "react";
import { default as IngkaCarousel } from "@ingka/carousel";

const Carousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleButtonClick = (value) => {
    setSlideIndex(slideIndex + value);
  };

  return (
    <IngkaCarousel
      id="carousel"
      isSlideShow
      slideIndex={slideIndex}
      onBtnRightClick={() => handleButtonClick(1)}
      onBtnLeftClick={() => handleButtonClick(-1)}
    >
      {images.map(({ src, srcSet }, i) => (
        <img key={i} src={src} alt="Display Product" srcSet={srcSet} />
      ))}
    </IngkaCarousel>
  );
};

export default Carousel;
