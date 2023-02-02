// Get cart count from local storage
let cartCount = localStorage.getItem("cartCount") || 0;

// Update the cart count display
document.getElementById("cartCount").innerText = cartCount;

// Update the cart count in local storage when adding items to cart
function addToCart() {
  cartCount++;
  localStorage.setItem("cartCount", cartCount);
  document.getElementById("cartCount").innerText = cartCount;
}

addToCart();
