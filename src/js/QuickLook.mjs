export async function logProductCard() {
  return new Promise((resolve) => {
    let productCard = document.querySelector(".product-card");
    if (productCard) {
      const showPopUpButton = document.querySelectorAll('.show-pop-up');
      const closePopUpButton = document.querySelector('.close-pop-up');
      const product = document.querySelector('.product-card');
  

      /* 
      1. get the id of the button
      2. change the styling only of the product that has the same id

      */
      showPopUpButton.forEach(function(item) {
          document.getElementById(`${item.id}`).addEventListener('click', function() {
      
            product.classList.remove('product-card');
            product.classList.add('modal');}); 
        
      });
     
      closePopUpButton.addEventListener('click', function() {
        product.classList.remove('modal');
        product.classList.add('product-card');
      });

      resolve(productCard);
    } else {
      setTimeout(() => resolve(logProductCard()), 100);
    }
  });
}



