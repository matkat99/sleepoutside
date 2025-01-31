<script>
  import {
    getLocalStorage,
    setLocalStorage,
    formDataToJSON,
    alertMessage,
    removeAllAlerts,
  } from "../utils.mjs";
  import { checkout } from "../externalServices.mjs";
  import { onMount } from "svelte";
  // props
  let { key = "" } = $props();

  // state vars
  let list = $state([]);
  let itemTotal = $state(0);
  let shipping = $state(0);
  let tax = $state(0);
  let orderTotal = $state(0);

  // initial setup
  const init = function () {
    list = getLocalStorage(key);
    calculateItemSummary();
  };
  // calculate order subtotal from the cart items
  const calculateItemSummary = function () {
    // calculate the total of all the items in the cart
    const amounts = list.map((item) => item.FinalPrice);
    itemTotal = amounts.reduce((sum, item) => sum + item);
  };
  // calculate the shipping, tax, and orderTotal
  const calculateOrdertotal = function () {
    shipping = 10.0 + (list.length - 1) * 2;
    tax = (itemTotal * 0.06).toFixed(2);
    orderTotal = (
      parseFloat(itemTotal) +
      parseFloat(shipping) +
      parseFloat(tax)
    ).toFixed(2);
  };
  // transform the current cart contents to a simpler format keeping just the things we need to send to checkout
  const packageItems = function (items) {
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
  };
  const handleSubmit = async function (e) {
    e.preventDefault();
    const json = formDataToJSON(this);
    // add totals, and item details
    json.orderDate = new Date();
    json.orderTotal = orderTotal;
    json.tax = tax;
    json.shipping = shipping;
    json.items = packageItems(list);
    console.log(json);
    try {
      const res = await checkout(json);
      console.log(res);
      setLocalStorage("so-cart", []);
      location.assign("/checkout/success.html");
    } catch (err) {
      // get rid of any preexisting alerts.
      removeAllAlerts();
      for (let message in err.message) {
        alertMessage(err.message[message]);
      }

      console.log(err);
    }
  };
  // initial setup
  onMount(init);
</script>

<form name="checkout" onsubmit={handleSubmit}>
  <fieldset>
    <legend>Shipping</legend>
    <div class="checkout__name">
      <label for="fname">First Name</label>
      <input id="fname" name="fname" required />
      <label for="lname">Last Name</label>
      <input id="lname" name="lname" required />
    </div>
    <div class="checkout__address">
      <label for="street">Street</label>
      <input id="street" name="street" required />
      <label for="city">City</label>
      <input id="city" name="city" required />
      <label for="state">State</label>
      <input id="state" name="state" required />
      <label for="zip">Zip</label>
      <input id="zip" name="zip" required onblur={calculateOrdertotal} />
    </div>
  </fieldset>
  <fieldset>
    <legend>Payment</legend>
    <label for="cardNumber">Card number</label>
    <input
      id="cardNumber"
      name="cardNumber"
      required
      placeholder="No spaces or dashes!"
      maxlength="16"
      minlength="16"
    />
    <label for="expiration">Expiration</label>
    <input id="expiration" name="expiration" required placeholder="mm/yy" />
    <label for="code">Security Code</label>
    <input
      id="code"
      name="code"
      required
      placeholder="xxx"
      maxlength="3"
      minlength="3"
    />
  </fieldset>
  <fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    <ul>
      <li>
        <label for="cartTotal">Item Subtotal({list.length})</label>
        <input
          id="cartTotal"
          name="cartTotal"
          disabled
          value={"$" + itemTotal}
        />
      </li>
      <li>
        <label for="shipping">Shipping Estimate</label>
        <input
          id="shipping"
          name="shipping"
          disabled
          value={shipping
            ? new Intl.NumberFormat("lookup", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "USD",
              }).format(shipping)
            : ""}
        />
      </li>
      <li>
        <label for="tax">Tax</label>
        <input id="tax" name="tax" disabled value={tax ? "$" + tax : ""} />
      </li>
      <li>
        <label for="orderTotal"><b>Order Total</b></label>
        <input
          id="orderTotal"
          name="orderTotal"
          disabled
          value={orderTotal ? "$" + orderTotal : ""}
        />
      </li>
    </ul>

    <button id="checkoutSubmit" type="submit">Checkout</button>
  </fieldset>
</form>

<style>
  form {
    max-width: 500px;
    margin: 0 auto;
  }
  * + fieldset {
    margin-top: 1em;
  }
  label {
    display: block;
  }
  input {
    width: 100%;
    font-size: 1.2em;
  }

  .checkout-summary > ul {
    padding-left: 0;
    list-style-type: none;
  }
  .checkout-summary li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .checkout-summary input {
    width: fit-content;
    border: 0;
    text-align: right;
    background-color: transparent;
  }
</style>
