const addToCartButton = document.getElementById("addToCart");
const removeFromCartButton = document.getElementById("removeFromCart");
const cartQuantitySpan = document.querySelector(".cart-quantity");

function updateCartCount(count) {
  localStorage.setItem("itemCount", count);
  cartQuantitySpan.innerHTML = count + (count === 1 ? "<sup>st</sup>" : (count === 2 ? "<sup>nd</sup>" : (count === 3 ? "<sup>rd</sup>" : "<sup>th</sup>")));
}

addToCartButton.addEventListener("click", () => {
  let currentCount = Number(localStorage.getItem("itemCount")) || 0;
  currentCount++;
  updateCartCount(currentCount);
});

removeFromCartButton.addEventListener("click", () => {
  let currentCount = Number(localStorage.getItem("itemCount")) || 0;
  if (currentCount > 0) {
    currentCount--;
    updateCartCount(currentCount);
  }
});

// On page load, get the item count from local storage and update the span
const itemCount = Number(localStorage.getItem("itemCount")) || 0;
updateCartCount(itemCount);
