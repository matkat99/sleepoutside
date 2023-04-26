import ShoppingCart from "./components/ShoppingCart.svelte";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

new ShoppingCart({
  target: document.querySelector(".products"),
});
