import { getLocalStorage,loadHeaderFooter,numberItems } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();
numberItems("so-cart");
getLocalStorage("so-cart", this.addToCart);

const cart =  new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();
