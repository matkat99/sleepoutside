import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}
export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.setTitle = () => {
      document.querySelector(".title").innerHTML = this.category;
    };

    this.setTitle();
  }

  async init() {
    let list;
    // Intenta cargar la lista desde el almacenamiento local
    const storedList = localStorage.getItem(`${this.category}_product_list`);
    if (storedList) {
      list = JSON.parse(storedList);
      console.log("Lista cargada desde el almacenamiento local:", list);
    } else {
      // Si no hay una lista almacenada, obtén la lista del dataSource
      list = await this.dataSource.getData(this.category);
      // Guarda la lista en el almacenamiento local
      localStorage.setItem(`${this.category}_product_list`, JSON.stringify(list));
    }
    this.renderList(list);
  }

  renderList(list) {
    this.setTitle();
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}

