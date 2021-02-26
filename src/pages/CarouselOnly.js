import React from "react";
import Carousel from "../components/Carousel";

const CarouselOnly = ({ images }) => {

  return (
    <main className="page-container">
      <div className="page-container__inner">
        <div className="page-container__main">
          <Carousel images={images} />
        </div>
      </div>
    </main>
  );
};

export default CarouselOnly;
