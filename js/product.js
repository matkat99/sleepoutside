function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

let products = [];
// get tents data
fetch("../json/tents.json")
  .then(convertToJson)
  .then((data) => {
    products = data;
  });

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  localStorage.setItem("so-cart", JSON.stringify(product));
}
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
