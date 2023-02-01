import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();
getLocalStorage("so-cart", this.addToCart);
const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();
