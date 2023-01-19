import { getLocalStorage, setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const productId = new getParam("product");
console.log(productId);

function addProductToCart(product) {
  let cart = getLocalStorage("soCart");
  if (cart) {
    let tent = 1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Id == product.Id) {
        product.quantity = cart[i].quantity++;
        tent = 0;
      }
    }

    if (tent == 1) {
      product.quantity = 1;
      cart.push(product);
    }
  } else {
    cart = [];
    product.quantity = 1;
    cart.push(product);
  }

  setLocalStorage("soCart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
  // Get the button element by its ID
var button = document.getElementById("addToCart");

// Add an event listener to the button
button.addEventListener("click", function() {
    // This function will be called when the button is clicked
    alert("You purchase!" + "" + product["Name"])
    
  });
  
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

  