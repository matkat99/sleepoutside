import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from './CheckoutProcess.js';

loadHeaderFooter();

const myCheckout = new CheckoutProcess('so-cart', '.checkout-summary');
myCheckout.init();

document.querySelector('#zip').addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));
// this is how it would look if we listen for the click on the button
document.querySelector('#checkoutSubmit')
.addEventListener('click', (e) => {
  e.preventDefault();
  const myForm = document.forms[0];
  const chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if(chk_status) 
    myCheckout.checkout();
});


// this is how it would look if we listen for the submit on the form
// document.forms['checkout']
// .addEventListener('submit', (e) => {
//   e.preventDefault();
//   // e.target would contain our form in this case
//    myCheckout.checkout();
// });
