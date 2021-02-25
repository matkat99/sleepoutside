import { setLocalStorage, getLocalStorage, alertMessage, removeAllAlerts } from './utils.js'
import ExternalServices from './ExternalServices.js';

const services = new ExternalServices();
// function to take a form and convert a FormData object into a simple JSON object.
// note that your form inputs must have a "name" attribute in order to show up in the FormData object.
// this should really be moved into a utils.js module...
function formDataToJSON(formElement) {    
  let formData = new FormData(formElement);
  // Object.fromEntries creates a new object made from an iterable list like an Array or Map
  // Object.entries takes an object and converts it into an Array that is iterable.
  const converted = Object.fromEntries(formData.entries());
  // if we have radios or checkboxes which share the same name we need to do  abit more or we will only get at most one of the checked values
  // converted.category = formData.getAll('category');
  return converted;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }
  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }
  calculateItemSummary() {
    const summaryElement = document.querySelector(
      this.outputSelector + ' #cartTotal'
    );
    const itemNumElement = document.querySelector(
      this.outputSelector + ' #num-items'
    );
    itemNumElement.innerText = this.list.length;
    // calculate the total of all the items in the cart
    const amounts = this.list.map((item) => item.FinalPrice);
    this.itemTotal = amounts.reduce((sum, item) => sum + item);
    summaryElement.innerText = '$' + this.itemTotal;
  }
  calculateOrdertotal() {
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);
    this.displayOrderTotals();
  }
  displayOrderTotals() {
    const shipping = document.querySelector(this.outputSelector + ' #shipping');
    const tax = document.querySelector(this.outputSelector + ' #tax');
    const orderTotal = document.querySelector(
      this.outputSelector + ' #orderTotal'
    );
    shipping.innerText = '$' + this.shipping;
    tax.innerText = '$' + this.tax;
    orderTotal.innerText = '$' + this.orderTotal;
  }
  async checkout() {
    const formElement = document.forms['checkout'];

    const json = formDataToJSON(formElement);
    // add totals, and item details
    json.orderDate = new Date();
    json.orderTotal = this.orderTotal;
    json.tax = this.tax;
    json.shipping = this.shipping;
    json.items = packageItems(this.list);
   console.log(json);
   try {
    const res = await services.checkout(json);
    console.log(res);
    setLocalStorage('so-cart', []);
    location.assign('/checkout/checkedout.html');
   }
   catch(err) {
     // get rid of any preexisting alerts.
     removeAllAlerts();
     for(let message in err.message) {
        alertMessage(err.message[message]);
     }
     
     console.log(err);
   }
  }
}
