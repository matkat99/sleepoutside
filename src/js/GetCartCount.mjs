import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

// Add a superscript number of items in the cart to the backpack icon.
function getCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];
  return cartItems.length;
}

export function updateCartCountIndex() {
  loadHeaderFooter().then(cartCountElement => {
    if (cartCountElement && typeof cartCountElement.textContent !== "undefined") {
      const cartCount = getCartCount(); 
      cartCountElement.textContent = cartCount;
    } else {
      return
    }
  });
}

export function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");

  if (cartCountElement !== null) {
    const cartCount = getCartCount();
    cartCountElement.textContent = cartCount;
  } else {
    return
  }
}

//Total$ in Cart
function calculateTotalPrice() {
  const cartItems = getLocalStorage("so-cart") || [];
  const totalPrice = cartItems.reduce((total, item) => total + item.FinalPrice, 0);
  return totalPrice;
}

function updateTotalPrice() {
  const totalElement = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout");

  // Verifica si el elemento existe antes de intentar actualizarlo
  if (totalElement) {
    const totalPrice = calculateTotalPrice();
    totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    if (totalPrice === 0) {
      totalElement.classList.add("hidden");
      checkoutBtn.classList.add("hidden");
    } else {
      totalElement.classList.remove("hidden");
      checkoutBtn.classList.remove("hidden");
    }
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCountIndex();
  updateCartCount()
  updateTotalPrice();
});

document.addEventListener("cartUpdated", function () {
  updateCartCountIndex();
  updateCartCount()
  updateTotalPrice();
});
