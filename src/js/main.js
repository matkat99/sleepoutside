import ProductList from "./components/ProductList.svelte";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

new ProductList({
  target: document.querySelector(".products"),
  props: { category: "tents" },
});
