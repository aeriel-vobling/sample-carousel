import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@ingka/svg-icon/dist/style.css";
import "@ingka/button/dist/style.css";
import "@ingka/carousel/dist/style.css";
import "@ingka/focus/dist/style.css";
import '@ingka/page-container/dist/style.css';
import '@ingka/typography/dist/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
