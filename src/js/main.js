import { html, render } from "htm/preact";
import ProductList from "./productList.mjs";

// render takes two arguments: a component, and the element in the DOM we want the component rendered into.
render(
  html`<${ProductList} category="tents" />`,
  document.querySelector(".products")
);
