function updateCartCount() {
  let count = localStorage.getItem(".cart-total") || 0;
  count = parseInt(count, 10);
  
  const cartCountElement = document.querySelector(".cart-count");
  cartCountElement.textContent = count;
  
  if (count === 0) {
    cartCountElement.style.display = "none";
  } else {
    cartCountElement.style.display = "block";
  }
}

// Call the updateCartCount function when the page loads
window.addEventListener("load", updateCartCount);

// Call the updateCartCount function when the page unloads
window.addEventListener("unload", updateCartCount);
// Call the updateCartCount function when the user clicks the cart button
document.getElementById("addToCart").addEventListener("click", updateCartCount);
