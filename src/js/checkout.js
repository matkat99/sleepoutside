//import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

// loadHeaderFooter();

let myCheckout  = new CheckoutProcess("so-cart", ".checkout-summary");
myCheckout.init()

document.querySelector("#zip").addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
    e.preventDefault();

    myCheckout.checkout();
});

