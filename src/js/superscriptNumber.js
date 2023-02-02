document.getElementById("addToCart").addEventListener("click", function() {
  let count = parseInt(document.getElementById("cart-count").innerHTML) + 1;
  document.getElementById("cart-count").innerHTML = count;
});
