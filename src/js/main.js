// import productList from "./productList.mjs";
import { setCartCount, getCartCount } from "./shoppingCart.mjs";
import "./main-header.mjs";

import { html, render } from "htm/preact";
import MainHead from "./main-header.mjs";
import ProductList from "./productList.mjs";

// setCartCount("main-header");

// productList(".product-list", "tents");

render(
  html`<${MainHead} cartCount="${getCartCount()}" />`,
  document.getElementById("header")
);

render(
  html`<${ProductList} category="tents" />`,
  document.querySelector(".products")
);
