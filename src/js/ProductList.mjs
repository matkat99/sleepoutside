import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductList {
    constructor(category, listEl, dataSource) {
        this.category = category;
        this.listElement = document.querySelector(listEl);
        this.dataSource = dataSource;
        this.init();
    }
    async init() {
        const products = await this.dataSource.getData();
        // console.log(products);
        let filteredProducts = this.filterList(products);
        this.renderList(filteredProducts);
    }
    renderList(products) {
        renderListWithTemplate(productCardTemplate, this.listElement, products);
    }
    filterList(products) {
        return products.filter((product) => product.Image != "");
    }
}
