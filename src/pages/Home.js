import React from "react";
import { useParams } from "react-router-dom";
import Button from "@ingka/button";
import Carousel from "../components/Carousel";
import logo from "../assets/images/ikea-logo.svg";

const fontFamily = {
  jp: "NotoSansJP",
};

const Home = ({ images }) => {
  const { lang } = useParams();
  
  const handleClick = () => {};

  return (
    <div style={{ fontFamily: fontFamily[lang] }}>
      <header className="header">
        <div className="page-container">
          <div className="page-container__inner">
            <div className="header__container page-container__main">
              <div className="header__logo">
                <a href={`https://www.ikea.com/${lang}`} className="link">
                  <img src={logo} alt="IKEA" title="IKEA" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="page-container">
        <div className="page-container__inner">
          <div className="page-container__main">
            <Carousel images={images} />
            <div className="cart-button">
              <Button
                type="primary"
                onClick={handleClick}
                text="Continue to your Cart"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
