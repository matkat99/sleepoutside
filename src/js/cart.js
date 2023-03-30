import { html, render } from "htm/preact";
import renderHeaderFooter from "./renderHeaderFooter.mjs";
import { renderShoppingCart } from "./shoppingCart.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

renderHeaderFooter();
// render(html`<${ShoppingCart} />`, document.querySelector(".product"));
renderShoppingCart(".products");
