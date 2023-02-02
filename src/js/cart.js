import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
 
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  let cartTotal = document.querySelector(".cart-total")

  /* If there's something in the Cart, display the items and the total sum of them. */
  if (cartItems.length != 0) {
    console.log(cartItems)
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    cartTotal.style.display = "block"; // Make appear the total paragraph that is hidden by default
    cartTotal.innerHTML = `Total: ${sumTotal(cartItems).toFixed(2)}`
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: ${item.quantity}</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
</li>`;
  return newItem;
}

function sumTotal(cart) {
  let total = 0;
  cart.forEach(item => total += (item.FinalPrice * item.quantity));
  return total;
}

function updateCartCount() {
  let count = localStorage("so-cart") || 0;
  count = parseInt(count, 10);
  
  const cartCountElement = document.querySelector(".product-list");
  cartCountElement.textContent = count;
  
  if (count === 0) {
    cartCountElement.style.display = "none";
  } else {
    cartCountElement.style.display = "block";
  }
}

// Call the updateCartCount function when the page loads
window.addEventListener("load", updateCartCount);

// Update the cart count in local storage whenever it changes
function addToCart() {
  let count = localStorage("so-cart") || 0;
  count = parseInt(count, 10);
  count += 1;
  
  getLocalStorage.setItem(".product-list", count);
  updateCartCount();
}

updateCartCount();
addToCart();
renderCartContents();
loadHeaderFooter();
