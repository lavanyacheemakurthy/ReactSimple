import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import App from './spa/app'
import {BrowserRouter  } from 'react-router-dom'
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
