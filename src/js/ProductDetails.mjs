import { setLocalStorage, getLocalStorage, updateCountItemsInCart } from "./utils.mjs";
window.plusSlides = function(n) {
  showSlides(slideIndex += n);
}
function productDetailsTemplate(product){
    return  `<section class="product-detail">
      <h3>${product.Brand.Name}</h3>

      <h2 class="divider">${product.NameWithoutBrand}</h2>
      <div class="carousel">
        ${renderImages(product)}
      </div>
      <!-- <img
        class="divider"
        src="${product.Images.PrimaryLarge}"
        alt="${product.NameWithoutBrand}"
      /> -->
      <p class="product-msrp__price">MSRP: $${product.SuggestedRetailPrice}</p>
      <p class="product-card__price">$${product.FinalPrice}</p>

      <p class="product__color">${product.Colors[0].ColorName}</p>

      <p class="product__description">
      ${product.DescriptionHtmlSimple}
      </p>

      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      </div>
    </section>`
  }

  function renderImages (product) {
    const numImages = product.Images.ExtraImages;
    let div = '';
    if (numImages != null) {
      for (let i = 0; i < numImages.length; i++) {
        const imageSelect = `
            <div class="myImage fade">
              <div class="numTest">${i + 1}/${numImages.length}</div>
              <img src="${numImages[i].Src}" alt="${numImages[i].Title}">
            </div>`
          console.log(numImages);
          div += imageSelect;
        } 
      const arrowButtons = `
      <a class="previous" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>`;
      div += arrowButtons;
    } else {
      return `<img class="divider" src="${product.Images.PrimaryLarge}`
    }
    return div;
  }
let slideIndex = 1;
function carousel() {
  showSlides(slideIndex);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('myImage');
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
      }
    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
        document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
        carousel();
    }
    addToCart(){
        //cart array needed
        let cart = getLocalStorage('so-cart') || [];
        cart.push(this.product);
        setLocalStorage('so-cart', cart);
        updateCountItemsInCart()
    }

    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
        "afterBegin",
        productDetailsTemplate(this.product)
        );
    }

}