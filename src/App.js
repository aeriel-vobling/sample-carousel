import React from "react";
import "./App.css";
import Button from "@ingka/button";
import Carousel from "./components/Carousel";
import logo from "./assets/images/ikea-logo.svg";

const images = [
  {
    src:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl",
    srcSet:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=s 576w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xl 900w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl 1200w",
  },
  {
    src:
      "https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xxxl",
    srcSet:
      "https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xxxs%20240w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xxs%20300w,    https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xs%20400w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=s%20500w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=m%20600w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=l%20750w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xl%20800w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xxl%20950w, https://www.ikea.com/ext/ingkadam/m/2e1b9dfcff9015b6/original/PH164183-crop002.jpg?f=xxxl%201400w",
  },
  {
    src:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl",
    srcSet:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=s 576w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xl 900w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl 1200w",
  },
];

const lang = "jp";

const fontFamily = {
  jp: "NotoSansJP",
};

function App() {
  const handleClick = () => {};

  return (
    <div style={{ fontFamily: fontFamily[lang] }}>
      <header className="header">
        <div className="page-container">
          <div className="page-container__inner">
            <div className="header__container page-container__main">
              <div className="header__logo">
                <a href="https://www.ikea.com/us/en/" className="link">
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
}

export default App;
