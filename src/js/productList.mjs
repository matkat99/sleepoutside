import { html } from "htm/preact";
import { useState, useEffect } from "preact/hooks";
import { getData } from "./productData.mjs";

function ProductSummary({ product }) {
  return html`<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
      <img src="${product.Images.PrimaryMedium}" alt="${product.Name}" />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a
    >
  </li>`;
}

export default function ProductList({ category }) {
  // we use state variables to trigger reloads of the UI. Every time a state variable changes the component will reload so that it can display the results of that change
  const [products, setProducts] = useState([]);

  console.log("enter", products);

  // we declare this locally to control it's scope.  It really doesn't need to be available outside of the component function.
  async function init() {
    // get the products
    const data = await getData(category);
    // set the products into our state variable.
    setProducts(data);
    console.log("init", data, products);
  }
  // the empty array that is passed in here means that we want this effect to run ONCE only when the component is initially mounted.
  // If we put a state variable in that array then the effect would run every time that variable changed
  useEffect(init, []);

  // note the 'html' at the beginning. That is actually a special type of function used in this way to create a tagged template literal.
  // they can be used to give template literal strings abilities that they would not normally have.
  return html`<h2>Top Products: ${category}</h2>
    <ul class="product-list">
      <!-- one of the superpowers of html is that it can take the results of a .map directly...like this -->
      ${products.map(
        (product) => html`<${ProductSummary} product=${product} />`
      )}
    </ul>`;
}
