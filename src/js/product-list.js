import ProductList from "./productList.mjs";
import { getParam } from "./utils.mjs";
import { html, render } from "htm/preact";
import renderHeaderFooter from "./renderHeaderFooter.mjs";

renderHeaderFooter();
const category = getParam("category");

render(
  html`<${ProductList} category=${category} />`,
  document.querySelector(".products")
);
