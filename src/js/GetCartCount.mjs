import { getLocalStorage } from "./utils.mjs";

// Add a superscript number of items in the cart to the backpack icon.
function getCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];
  return cartItems.length;
}

export function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  const cartCount = getCartCount();
  cartCountElement.textContent = cartCount;
}

// Total$ in Cart
function calculateTotalPrice() {
  const cartItems = getLocalStorage("so-cart") || [];
  const totalPrice = cartItems.reduce((total, item) => total + item.FinalPrice, 0);
  return totalPrice;
}

function updateTotalPrice() {
  const totalElement = document.getElementById("total-price");
  if (totalElement) {
    const totalPrice = calculateTotalPrice();
    totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    if (totalPrice === 0) {
      totalElement.classList.add("hidden");
    } else {
      totalElement.classList.remove("hidden");
    }
  }
}

// Additional event listener for changes in the cart
document.addEventListener("cartUpdated", function () {
  // Update cart count and total price when the cart is updated
  updateCartCount();
  updateTotalPrice();
});

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  updateTotalPrice();
});

// Initial update on DOMContentLoaded
document.addEventListener("cartUpdated", function () {
  updateCartCount();
  updateTotalPrice();
});


