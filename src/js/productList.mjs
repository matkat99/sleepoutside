import { html } from "htm/preact";
import { useEffect, useState } from "preact/hooks";
import { getData } from "./productData.mjs";
import ProductSummary from "./product-summary.mjs";

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
