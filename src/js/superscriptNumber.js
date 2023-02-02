document.addEventListener("DOMContentLoaded", function() {
  let count = localStorage.getItem("cartCount");
  if (count === null) {
    count = 0;
  }
  document.getElementById("cart-count").innerHTML = count;
});

document.getElementById("add-to-cart").addEventListener("click", function() {
  let count = parseInt(document.getElementById("cart-count").innerHTML) + 1;
  document.getElementById("cart-count").innerHTML = count;
  localStorage.setItem("cartCount", count);
});
