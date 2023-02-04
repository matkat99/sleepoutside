import { renderListWithTemplate } from "./utils.mjs";

export function productCardTemplate(product) {
  if(product.Id != "880RT" && product.Id != "989CG"){ return `<li class="product-card">
  <button class="close-pop-up">Close</button>
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
  <button class="show-pop-up" id="${product.Id}">Show Pop-Up</button>
</li>`};
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData();
      // render the list 
      this.renderList(list)
    }
    // render after doing the first stretch
    renderList(list) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
  }
