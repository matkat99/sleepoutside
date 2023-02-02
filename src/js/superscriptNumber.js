function updateCartCount() {
  let count = localStorage.getItem("cartCount") || 0;
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

// Update the cart count in local storage whenever it changes
function addToCart() {
  let count = localStorage.getItem("cartCount") || 0;
  count = parseInt(count, 10);
  count += 1;
  
  localStorage.setItem("cartCount", count);
  updateCartCount();
}
