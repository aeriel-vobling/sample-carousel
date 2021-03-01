import React from "react";
import Carousel from "../components/Carousel";

const CarouselOnly = ({ images }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel images={images} />
    </div>
  );
};

export default CarouselOnly;
