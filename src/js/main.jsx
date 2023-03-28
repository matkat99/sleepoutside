import productList from "./productList.mjs";
import { setCartCount } from "./shoppingCart.mjs";
import "./main-header.mjs";

import React from "react";
import ReactDOM from "react-dom/client";
import MainHead from "./main-header.jsx";
// loadHeaderFooter();

setCartCount("main-header");

productList(".product-list", "tents");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainHead cartCount={count}/>);
