import { getParam, loadHeaderFooter, numberItems } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();
numberItems("so-cart", ".numberCartItems");

const productId = getParam("product");
const dataSource = new ExternalServices("tents");
const product = new ProductDetails(productId, dataSource);

product.init();

// console.log(dataSource.findProductById(productId));

// function addProductToCart(product) {
//   let cart = getLocalStorage("so-cart");
//   if (cart) {
//     let tent = 1;
//     for (let i = 0; i < cart.length; i++) {
//       if (cart[i].Id == product.Id) {
//         product.quantity = cart[i].quantity++;
//         tent = 0;
//       }
//     }

//     if (tent == 1) {
//       product.quantity = 1;
//       cart.push(product);
//     }
//   } else {
//     cart = [];
//     product.quantity = 1;
//     cart.push(product);
//   }

//   setLocalStorage("so-cart", cart);
// }

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
