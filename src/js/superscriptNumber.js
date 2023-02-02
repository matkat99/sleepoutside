const addToCartBtn = document.getElementById("addToCart");
  const cartQuantitySpan = document.getElementsByClassName("cart-quantity");

  addToCartBtn.addEventListener("click", function () {
    let currentQuantity = localStorage.getItem("cart-quantity") || 0;
    currentQuantity++;
    localStorage.setItem("cart-quantity", currentQuantity);
    cartQuantitySpan.innerHTML = currentQuantity;
  });

  document.addEventListener("DOMContentLoaded", function () {
    cartQuantitySpan.innerHTML = localStorage.getItem("cart-quantity") || 0;
  });
