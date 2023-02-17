import { loadHeaderFooter, numberItems } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();
numberItems("so-cart", ".numberCartItems"); 

const shoppingBag = new ShoppingCart("so-cart", ".product-list");

shoppingBag.renderCartContents();
