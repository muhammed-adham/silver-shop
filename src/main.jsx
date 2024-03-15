import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";
import WishCountProvider from "./context/wishCountContext.jsx";
import CartCountProvider from "./context/cartCountContext.jsx";
import IsMobileProvider from "./context/isMobContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsMobileProvider>
      <CartCountProvider>
        <WishCountProvider>
          <App />
        </WishCountProvider>
      </CartCountProvider>
    </IsMobileProvider>
  </React.StrictMode>
);
