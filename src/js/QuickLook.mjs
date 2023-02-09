export async function logProductCard() {
  return new Promise((resolve) => {
    let productCard = document.querySelector(".product-card");
    if (productCard) {
      const showPopUpButton = document.querySelectorAll(".show-pop-up");
      const closePopUpButton = document.querySelectorAll(".close-pop-up");



      /* 
      1. get the id of the button
      2. change the styling only of the product that has the same id

      */
      showPopUpButton.forEach(function (item) {
        document.getElementById(`${item.id}`).addEventListener("click", function () {
          document.getElementById(`${item.id}`).style.display = "none";
          document.getElementById(`close-${item.id}`).style.display = "block";
          const product = document.getElementById(`product-${item.id}`);
          product.classList.remove("product-card");
          product.classList.add("modal");
          document.addEventListener("click", function (event) {
            const popUp = document.getElementById(`product-${item.id}`);
            if (!popUp.contains(event.target)) {
              document.getElementById(`${item.id}`).style.display = "block";
              document.getElementById(`close-${item.id}`).style.display = "none";
              product.classList.remove("modal");
              product.classList.add("product-card");
             
            }
          })
        });

      });

      closePopUpButton.forEach(function (item) {
        document.getElementById(`${item.id}`).addEventListener("click", function () {
          let productId = item.id.slice(6, 11)
          document.getElementById(`${productId}`).style.display = "block";
          document.getElementById(`close-${productId}`).style.display = "none";
          const product = document.getElementById(`product-${productId}`);
          product.classList.remove("modal");
          product.classList.add("product-card");
          
        });

      });

      resolve(productCard);
    } else {
      setTimeout(() => resolve(logProductCard()), 100);
    }
  });
}



