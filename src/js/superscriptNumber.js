import {getLocalStorage} from "./utils.mjs";
//How to call a function in two primary places: on page load and when items are added/removed from cart?
window.onload = function() {
  updateCart();
};

document.getElementById("yourButton").addEventListener("click", function() {
  updateCart();
});

function updateCart() {
  //Local storage
  let localStorage = getLocalStorage();

  // Get the value from the local storage
  let cartValue = localStorage.getItem("so-cart");

  // Convert the value to a string
  cartValue = cartValue.toString();

  // Format the value as superscript
  let superscriptValue = "<sup>" + cartValue + "</sup>";

  // Update the HTML element with the superscript value
  document.getElementById("numberCartItems").innerHTML = superscriptValue;
}
