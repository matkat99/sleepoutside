import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
  return `<section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>

    <img class="divider" src="${product.Images.PrimaryLarge}" alt="${product.NameWithoutBrand}" />
    
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`;
}

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    console.log(this.product)
    // once we have the product details we can render out the HTML
    this.renderProductDetails("main");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  /* addToCart(){
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", this.product);
  } */

  addToCart() {
    // get the cart items from local storage
    let cartItems = getLocalStorage("so-cart") || [];

    // check if cartItems is an array
    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }

    // add the current product to the cart
    cartItems.push(this.product);

    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `<p>Item added to cart</p><span>close</span>`;

    alert.addEventListener("click", function (e) {
      if (e.target.tagName == "SPAN") {
        main.removeChild(this);
      }
    });

    const main = document.querySelector("main");
    main.prepend(alert);

    if (scroll) window.scrollTo(0, 0);

    // set the cart items in local storage
    setLocalStorage("so-cart", cartItems);
    document.dispatchEvent(new Event("cartUpdated"));
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
  };
}

