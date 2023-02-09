import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
    let final_price = Number(item.FinalPrice)
    let suggested_retail_price = Number(item.SuggestedRetailPrice)
    let discount = Math.abs(final_price - suggested_retail_price).toFixed(2)
    let quantity = Number(item.quantity)
    let total_discount = (discount * quantity).toFixed(2)
    const newItem = `<li class='cart-card divider'>
                      <a href='#' class='cart-card__image'>
                        <img
                          src='${item.Images.PrimarySmall}'
                          alt='${item.Name}'
                        />
                      </a>
                      <a href='#'>
                        <h2 class='card__name'>${item.Name}</h2>
                      </a>
                      <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
                      <p class='cart-card__quantity'>qty: ${item.quantity}</p>
                      <p class='saved'>Saved: $${total_discount}<p>
                      <p class='cart-card__price'>$${item.FinalPrice}</p>
                    </li>
                    `;
    return newItem;
}

export default class ShoppingCart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }
    // renderCartContents() {
    //   const cartItems = getLocalStorage(this.key);
    //   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    //   document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    // }
    renderCartContents() {
      const cartItems = getLocalStorage(this.key) || [];
      let cartTotal = document.querySelector(".cart-total")
    
      /* If there's something in the Cart, display the items and the total sum of them. */
      if (cartItems.length != 0) {
        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
        document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    
        cartTotal.style.display = "block"; // Make appear the total paragraph that is hidden by default
        cartTotal.innerHTML = `Total: ${sumTotal(cartItems).toFixed(2)}`
      }
    }
}

function sumTotal(cart) {
  let total = 0;
  cart.forEach(item => total += (item.FinalPrice * item.quantity));
  return total;
}