// import productList from "./productList.mjs";
import { setCartCount, getCartCount } from "./shoppingCart.mjs";
// import "./main-header.mjs";

import { html, render } from "htm/preact";
import MainHeader from "./mainHeader.svelte";
// import ProductList from "./productList.mjs";

import ProductList from "./productList.svelte";

// setCartCount("main-header");

// productList(".product-list", "tents");

// render(
//   html`<${MainHead} cartCount="${getCartCount()}" />`,
//   document.getElementById("header")
// );

// render(
//   html`<${ProductList} category="tents" />`,
//   document.querySelector(".products")
// );

new MainHeader({
  target: document.querySelector("#main-header"),
});

const list = new ProductList({
  target: document.querySelector(".products"),
  props: { category: "tents" },
});
