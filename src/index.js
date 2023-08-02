import React from "react"; // لازم يكون موجود في كل ملف
// react include jsx, it likes html
import ReactDOM from "react-dom/client"; // لازم يكون موجود في كل ملف بينعرض في المتصفح
import "./index.css";
import App from "./App";
// product provider
import ProductProvider from "./contexts/ProductContext";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// cart provider
import CartProvider from "./contexts/CartContext";

//pwa
import swDEv from './swDev'
import swDev from "./swDev";

// ReactDOM.render(what, where);
// what must have only one tag, or return can only return one tag

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
swDev();
