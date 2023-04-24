import ProductList from "./components/ProductList.svelte";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

new ProductList({
  target: document.querySelector(".products"),
  props: { category: category },
});
