import { getParam } from "./utils.mjs";
import "./productDetails.mjs";
import { setCartCount, getCartCount } from "./shoppingCart.mjs";
// import "./main-header.mjs";
import { html, render } from "htm/preact";
import ProductDetailView from "./productDetails.mjs";
import MainHeader from "./mainHeader.svelte";

// setCartCount("main-header");

const productId = getParam("product");
// const el = document.querySelector("product-details");
// el.productId = productId;

new MainHeader({
  target: document.querySelector("header"),
});

render(
  html`<${ProductDetailView} productId=${productId} />`,
  document.querySelector(".product-detail")
);

// productDetails(productId);
