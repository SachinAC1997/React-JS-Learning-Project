import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Apps from "./Apps";
import './index.css';

const root = ReactDOM.createRoot( 
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </React.StrictMode>
);