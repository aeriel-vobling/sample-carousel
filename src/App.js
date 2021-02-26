import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CarouselOnly from "./pages/CarouselOnly";

const images = [
  {
    src:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl",
    srcSet:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=s 576w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xl 900w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl 1200w",
  },
  {
    src:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl",
    srcSet:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=s 576w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xl 900w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl 1200w",
  },
  {
    src:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl",
    srcSet:
      "https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=s 576w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xl 900w, https://www.ikea.com/images/et-sovevaerelse-med-rosafarvede-vaegge-et-garderobeskab-med--5d3451b2bd760196a08541ebb59c352a.jpg?f=xxxl 1200w",
  },
];

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/iframe/:sessionId">
          <CarouselOnly images={images} />
        </Route>
        <Route path="/:sessionId">
          <Home images={images} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
