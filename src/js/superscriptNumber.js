document.querySelector("#addToCart").addEventListener("click", function() {
  let count = parseInt(document.getElementById("cart-count").innerHTML) + 1;
  document.getElementById("data-id").innerHTML = count;
});
