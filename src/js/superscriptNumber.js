const addToCartButton = document.getElementById("addToCart");
const cartQuantitySpan = document.querySelector(".cart-quantity");

addToCartButton.addEventListener("click", () => {
  let currentCount = Number(localStorage.getItem("itemCount")) || 0;
  currentCount++;
  localStorage.setItem("itemCount", currentCount);
  cartQuantitySpan.innerText = currentCount;
});

// On page load, get the item count from local storage and update the span
const itemCount = Number(localStorage.getItem("itemCount")) || 0;
cartQuantitySpan.innerText = itemCount;
