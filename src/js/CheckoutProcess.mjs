import { sumTotal } from "./ShoppingCart.mjs";
import { getLocalStorage } from "./utils.mjs";
import { numberItems } from "./utils.mjs";
import { calculateShippingCost } from "./utils.mjs";
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
        console.log(this.list)
        this.itemTotal = `${sumTotal(this.list).toFixed(2)}`
        document.querySelector("#subtotal-sum").innerHTML += `<strong>${this.itemTotal}<strong/>`
        numberItems(this.key, "#subtotal-p")
        console.log(numberItems(this.key))

        
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
        document.getElementById("shipping-estimate").innerHTML += `<strong>${this.shipping }<strong/>`
        document.getElementById("tax").innerHTML += `<strong>${this.tax}<strong/>`
        document.getElementById("order-total").innerHTML += `<strong>${this.orderTotal.toFixed(2)}<strong/>`
    }

}


let check = new CheckoutProcess("so-cart", "#order-total")
check.init()

check.calculateOrdertotal()
