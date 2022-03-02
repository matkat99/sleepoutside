
import { setLocalStorage } from './utils.js';

export default class ProductDetails {
   constructor(productId, dataSource) {
      this.productId = productId
      this.product = {}
      this.dataSource = dataSource
   }

   addToCart(e) {
      setLocalStorage("so-cart", product);
   }
   async init() {
      this.product = await this.dataSource.findProductById(this.productId);
      document.querySelector('main').innerHTML = this.renderProductDetails();
      document.getElementById('addToCart')
         .addEventListener('click', this.addToCart.bind(this));
   }
   renderProductDetails() {
      console.log(this.product)
      return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img
         class="divider"
         src="${this.product.Image}"
         alt="${this.product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${this.product.FinalPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
         <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      </div></section>`;

      //this was our attempt
      // let section = document.createElement('section').setAttribute('class', 'product-detail')
      // let h3 = document.createElement('h3')
      // let h2 = document.createElement('h2').setAttribute('class', 'divider')
      // let img = document.createElement('img').setAttribute('class', 'divider')
      // let pPrice = document.createElement('p').setAttribute('class', 'product-card__price')
      // let pColor = document.createElement('p').setAttribute('class', 'product__color')
      // let pDescription = document.createElement('p').setAttribute('class', 'product__description')
      // let pDetailAdd = document.createElement('div').setAttribute('class', 'product-detail__add')
      // let addButton = document.createElement('button').setAttribute('id', 'addToCart')

      // console.log(this.dataSource)
   }
}
