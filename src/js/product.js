import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const soCart = getLocalStorage("so-cart");

  if (soCart === null) {
    let productStorage = [product];
    setLocalStorage("so-cart", productStorage);
  } else {
    soCart.push(product);
    setLocalStorage("so-cart", soCart);
  }
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);

  // window.location.href = "../";
  document.getElementById("addToCart").textContent = "Product Added";
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
