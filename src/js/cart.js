import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

function sumTotal(carts) {
  let total = 0;
  carts.forEach(item => total += (item.FinalPrice * item.quantity));
  return total;
}

sumTotal();
loadHeaderFooter();
const cart =  new ShoppingCart("so-cart",".product-list");
cart.renderCartContents();
