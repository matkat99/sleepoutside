import { getLocalStorage,loadHeaderFooter,numberItems } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();
numberItems("so-cart");
getLocalStorage("so-cart");
const ShoppingBag =  new ShoppingCart("so-cart", ".product-list");

ShoppingBag.renderCartContents();
