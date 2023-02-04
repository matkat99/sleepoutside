import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const ShoppingBag =  new ShoppingCart("so-cart", ".product-list");

ShoppingBag.renderCartContents();
