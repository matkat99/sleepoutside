import { renderListWithTemplate } from './utils.js';

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
  
  prepareTemplate(template, product) {
    
    template.querySelector('a').href +=  product.Id;
    template.querySelector('img').src = product.Image;
    template.querySelector('img').alt += product.Name;
    template.querySelector('.card__brand').textContent = product.Brand.Name;
    template.querySelector('.card__name').textContent = product.NameWithoutBrand;
    template.querySelector('.product-card__price').textContent += product.FinalPrice; 
    return template;
  }
  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('product-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    
  }
  // original method before moving the template logic to utils.js
  // renderList(list) {
    // const template = document.getElementById('product-card-template');
    // list.forEach(product => {
    //   const clone = template.content.cloneNode(true);
    //   const hydratedTemplate = this.prepareTemplate(clone, product);
    //   this.listElement.appendChild(hydratedTemplate);
    // })
  // }
}
