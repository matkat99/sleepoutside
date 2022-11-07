import { setLocalStorage } from "./utils.js";

let products = [];

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// get tents data
async function getProductsData() {
  const res = await fetch("../json/tents.json");
  products = await convertToJson(res);
}
// this could also be done using .then()
// fetch("../json/tents.json")
//     .then(convertToJson)
//     .then((data) => {
//       products = data;
//     });

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
function addToCartHandler(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

getProductsData();
