import { sumTotal } from "./ShoppingCart.mjs";
import { getLocalStorage, numberItems, calculateShippingCost } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

// Takes a form element and returns an object where the key is the "name" of the form input.
const services = new ExternalServices();
function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
    convertedJSON = {};

    formData.forEach(function (value, key) {
    convertedJSON[key] = value;
    });

    return convertedJSON;
}

// Takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
function packageItems(items) {
    // Convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.
    const simplifiedItems = items.map((item) => {
        console.log(item);
        return {
            id: item.Id,
            price: item.FinalPrice,
            name: item.Name,
            quantity: item.quantity,
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
        this.list = getLocalStorage(this.key) || [];
        this.calculateItemSummary();
    }
    calculateItemSummary() {
        // calculate and display the total amount of the items in the cart, and the number of items.
        // console.log(this.list)
        this.itemTotal = `${sumTotal(this.list).toFixed(2)}`
        document.querySelector("#cartTotal").innerHTML += `<strong>${this.itemTotal}<strong/>`
        numberItems(this.key, "#num-items")
        // console.log(numberItems(this.key))
    }
    calculateOrdertotal() {
        // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
        this.tax = this.itemTotal * 0.06
        this.shipping = calculateShippingCost(numberItems(this.key))
        this.orderTotal = +this.itemTotal + +this.shipping + +this.tax;
        // display the totals.
        this.displayOrderTotals();
    }
    displayOrderTotals() {
        // once the totals are all calculated display them in the order summary page
            document.getElementById("shipping").innerHTML += `<strong>${this.shipping }<strong/>`
            document.getElementById("tax").innerHTML += `<strong>${this.tax}<strong/>`
            document.getElementById("orderTotal").innerHTML += `<strong>${this.orderTotal.toFixed(2)}<strong/>`
        }
    async checkout() {
        const formElement = document.forms["checkout"];
        const json = formDataToJSON(formElement);
        // Add totals, and item details
        json.orderDate = new Date();
        json.orderTotal = this.orderTotal;
        json.tax = this.tax;
        json.shipping = this.shipping;
        json.items = packageItems(this.list);
        console.log("json", json);
        try {
            const res = await services.checkout(json);
            return res;
        } catch (err) {
        return err;
        }
    }
}
