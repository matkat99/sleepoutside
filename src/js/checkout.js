import CheckoutProcess from "./CheckoutProcess.mjs";

const myCheckout = new CheckoutProcess("so-cart", ".details");
myCheckout.init();


document.querySelector("#checkout-submit").addEventListener("click", (e) => {
  e.preventDefault();

  // get all input
  const formFields = document.forms["checkout"].querySelectorAll("input");
  // chek for "" input
  let isValid = true;
  formFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
    }
  });

  if (isValid) {
    myCheckout.checkout();
    const form = document.querySelector(".form-container");
    form.innerHTML = `
    <p style = "font-style: italic;">
      The form has been sent! Check your 
      <strong>email</strong>
      for more shipping details.
    </p>`;
    console.log(form)
  } else {
    alert("Please complete all fields of the form.");
  }
});

