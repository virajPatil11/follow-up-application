// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import MainPage from './components/MainPage';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <MainPage />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
import App from './App';
import Footer from './components/Footer';
ReactDOM.render(
  <React.StrictMode>
    <MainPage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
