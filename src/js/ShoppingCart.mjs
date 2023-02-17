import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  let final_price = Number(item.FinalPrice)
  let suggested_retail_price = Number(item.SuggestedRetailPrice)
  let discount = Math.abs(final_price - suggested_retail_price).toFixed(2)
  let quantity = Number(item.quantity)
  let total_discount = (discount * quantity).toFixed(2)
  let { Images, Name } = item
  let total_price = Number(final_price * quantity).toFixed(2)

  console.log("item", item)
  console.log("image",item.Images.PrimarySmall)

  const newItem = `<li class='cart-card divider'>
                    <a href='#' class='cart-card__image'>
                    <img
                      src="${Images.PrimaryMedium}"
                      srcset="${Images.PrimarySmall} 350w,
                              ${Images.PrimaryMedium} 850w,
                              ${Images.PrimaryLarge} 1350w,
                              ${Images.PrimaryExtraLarge} 1900w"
                      sizes="(max-width: 350px) 320px,
                            (max-width: 850px) 768px,
                            (max-width: 1350px) 1200px,
                            1900px"
                      alt="Image of ${Name}"
                    />
                    </a>
                    <a href='#'>
                      <h2 class='card__name'>${item.Name}</h2>
                    </a>
                    <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
                    <p class='cart-card__quantity'>Quantity: ${item.quantity}</p>
                    <p class='cart-card__price'>Unit Price: $${item.FinalPrice}</p>
                    <p class='cart-card__price'>Total: $${total_price}</p>
                    <p class='saved'>Saved: $${total_discount}<p>
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
        cartTotal.innerHTML = `Total: $${sumTotal(cartItems).toFixed(2)}`
      }
    }
}

export function sumTotal(cart) {
  let total = 0;
  cart.forEach(item => total += (item.FinalPrice * item.quantity));
  return total;
}
