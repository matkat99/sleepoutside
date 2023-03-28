import { getParam } from "./utils.mjs";
import "./productDetails.mjs";
import { setCartCount } from "./shoppingCart.mjs";
import "./main-header.mjs";
import { html, render } from "htm/preact";
import ProductDetailView from "./productDetails.mjs";

setCartCount("main-header");

const productId = getParam("product");
// const el = document.querySelector("product-details");
// el.productId = productId;

render(
  html`<${ProductDetailView} productId=${productId} />`,
  document.querySelector(".product-detail")
);

// productDetails(productId);
