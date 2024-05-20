import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProcutsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <CartProvider>
            <Router basename="/coffee-shop">
              <App />
            </Router>
          </CartProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </NotificationProvider>
  </React.StrictMode>
);
