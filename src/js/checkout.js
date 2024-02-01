import CheckoutProcess from "./CheckoutProcess.mjs";

const myCheckout = new CheckoutProcess("so-cart", ".details");
myCheckout.init();

document.querySelector("#checkout-submit").addEventListener("click", (e) => {
  e.preventDefault();
  // const form = document.forms["checkout"];
  // const formFields = form.querySelectorAll("input");

  // // Check for valid input
  // let isValid = true;
  // formFields.forEach((field) => {
  //   if (!field.checkValidity()) {
  //     isValid = false;
  //   }
  // });

  // if (isValid) {
  //   myCheckout.checkout();
  //   const formContainer = document.querySelector(".form-container");
  //   formContainer.innerHTML = `
  //     <p style="font-style: italic;">
  //       The form has been sent! Check your 
  //       <strong>email</strong>
  //       for more shipping details.
  //     </p>`;
  // } else {
  //   alert("Please complete all fields of the form.");
  // }
  myCheckout.checkout();
});
