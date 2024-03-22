import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout");
myCheckout.init();

document
  .querySelector("#zipn")
  .addEventListener("blur", myCheckout.calculateOrderTotal.bind(myCheckout));

document.querySelector("#checkSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  myCheckout.checkout();
});

function checkoutFormValidate() {
  const formElement = document.querySelectorAll('.checkout input');
  let error = [];

  formElement.forEach((element) => {
      if(element.value == null) {
          error.push(element.name);
      }
  })
  return error;
}

document.forms['checkout']
.addEventListener('submit', (e) => {
  e.preventDefault();
  let errors = checkoutFormValidate();
  if(errors.length > 0) {
    throw new Error('${errors[0]} Needs a value');
  }
  myCheckout.checkout();
});