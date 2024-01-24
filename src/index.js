import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*це з react-router-dom ш ми маємо весь додаток огорнути в цей тег*/}
      <BrowserRouter>
          <CartProvider>

              <App />

          </CartProvider>
      </BrowserRouter>
  </React.StrictMode>
);

