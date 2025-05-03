import { loadHeaderFooter, alertMessage } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout");
myCheckout.init();

document
  .querySelector("#zipn")
  .addEventListener("blur", myCheckout.calculateOrderTotal.bind(myCheckout));

document.querySelector("#checkSubmit").addEventListener("click", async (e) => {
  e.preventDefault();
  myCheckout.checkout();
});

document.forms['checkout']
.addEventListener('submit', (e) => {
  e.preventDefault();
  myCheckout.checkout();
});