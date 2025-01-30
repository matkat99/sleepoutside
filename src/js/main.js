import { mount } from "svelte";
import ProductList from "./components/ProductList.svelte";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productList = mount(ProductList, {
  target: document.querySelector(".products"),
  props: { category: "tents" },
});
