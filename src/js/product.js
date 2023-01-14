import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails  from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const products = new ProductDetails(productId, dataSource);
products.init();
function addProductToCart(product) {
  getParam("so-cart", product);
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
      alert("You purchase!")
      console.log(product["Id"])
    });
    
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
  
