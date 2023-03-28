import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";
import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";
import ProductSummary from "./product-summary.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

async function productList(selector, category) {
  // get the element we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of products
  const products = await getData(category);
  console.log(products);
  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);
}

export default function ProductList({ category }) {
  const [products, setProducts] = useState();
  useEffect(async () => {
    const data = await getData(category);
    setProducts(data);
  }, [category]);

  return html`<h2>Top Products</h2>
    <ul class="product-list">
      ${products?.map(
        (product) => html`<li><${ProductSummary} product=${product} /></li>`
      )}
    </ul>`;
}
