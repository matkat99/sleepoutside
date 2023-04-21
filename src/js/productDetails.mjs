import { findProductById } from "./productData.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { getCartCount, setCartCount } from "./shoppingCart.mjs";
import { LitElement, html, css } from "lit";
import { html as phtml } from "htm/preact";
import { useState, useEffect } from "preact/hooks";
import { cartCount } from "./stores.mjs";

let product = {};

async function productDetails(productId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there
  if (!cartContents) {
    cartContents = [];
  }
  // then add the current product to the list
  cartContents.push(product);
  setLocalStorage("so-cart", cartContents);
  // update the store
  cartCount.set(cartContents.length);
  // setCartCount("main-header");
}
function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}

export default function ProductDetailView({ productId }) {
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const product = await findProductById(productId);
    setProduct(product);
  }, [productId]);

  return product.Brand
    ? phtml`   <h3 id="productName"></h3>
  <h2 class="divider" id="productNameWithoutBrand">
    ${product?.Brand?.Name}
  </h2>
  <img
    id="productImage"
    class="divider"
    src="${product?.Image}"
    alt="${product?.Name}"
  />
  <p class="product-card__price" id="productFinalPrice">
    ${product?.FinalPrice}
  </p>
  <p class="product__color" id="productColorName">
    ${product.Colors[0].ColorName}
  </p>
  <p class="product__description" id="productDescriptionHtmlSimple">
    ${product?.DescriptionHtmlSimple}
  </p>
  <div class="product-detail__add">
    <button id="addToCart" data-id="" onClick=${addToCart}>
      Add to Cart
    </button>
  </div>`
    : `Loading`;
}

class ProductDetails extends LitElement {
  constructor() {
    super();
  }
  async firstUpdated() {
    this.product = await findProductById(this.productId);
    console.log(this.product);
  }
  static styles = css`
    img {
      width: 100%;
    }
    .divider {
      border-bottom: 2px solid var(--primary-color);
    }
    button {
      padding: 0.5em 2em;
      background-color: var(--secondary-color);
      color: white;
      margin: auto;
      display: block;
      border: 0;
      font-size: var(--large-font);
      cursor: pointer;
    }
  `;
  static properties = {
    product: {},
    productId: { attribute: "product-id" },
  };
  render() {
    return html`
      <h3 id="productName"></h3>
      <h2 class="divider" id="productNameWithoutBrand">
        ${this.product?.Brand?.Name}
      </h2>
      <img
        id="productImage"
        class="divider"
        src="${this.product?.Image}"
        alt="${this.product?.Name}"
      />
      <p class="product-card__price" id="productFinalPrice">
        ${this.product?.FinalPrice}
      </p>
      <p class="product__color" id="productColorName">
        ${this.product ? this.product.Colors[0].ColorName : ""}
      </p>
      <p class="product__description" id="productDescriptionHtmlSimple">
        ${this.product?.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="" @click=${addToCart}>
          Add to Cart
        </button>
      </div>
    `;
  }
}
customElements.define("product-details", ProductDetails);
