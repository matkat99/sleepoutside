import { mount } from "svelte";
import ShoppingCart from "./components/ShoppingCart.svelte";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const shoppingCart = mount(ShoppingCart, {
  target: document.querySelector(".products"),
});
