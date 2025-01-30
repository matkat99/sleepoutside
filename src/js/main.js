import { mount } from "svelte";
import ProductList from "./components/ProductList.svelte";

const productList = mount(ProductList, {
  target: document.querySelector(".products"),
  props: { category: "tents" },
});
