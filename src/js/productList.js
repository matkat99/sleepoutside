
export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible. Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData();
    this.renderList(list);
  }
  renderProductCard(product) {
    return `<li class="product-card">
    <a href="product_pages/product-details.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`
  }
  renderList(list) {
    // map here is used to convert our data from an array of objects to an array of html with just the information we need.
    const markup = list.map(product => this.renderProductCard(product));
    // we can use the .join() method to collapse our array into a long string...then set that to the innerHTML of our element
    this.listElement.innerHTML = markup.join('');
  }
}
