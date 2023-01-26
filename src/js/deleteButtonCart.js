document.addEventListener("DOMContentLoaded", function(){

    //select the cart container
    const myCartContainer = document.querySelector(".products");
    let check = JSON.parse(localStorage.getItem("so-cart"))
    //check if the localstorage is empty
    if(check == null) {
        const messageEmptyCart = document.createElement("p");
        messageEmptyCart.textContent = "Your cart is empty!";
        messageEmptyCart.style.fontSize = "2rem";
        messageEmptyCart.style.fontWeight = "bold";
        myCartContainer.appendChild(messageEmptyCart);
        messageEmptyCart.style.textAlign = "center";
    }  
    //if the localstorage is not empty
    else {
        const cards = [...document.querySelectorAll(".cart-card")];
        cards.forEach(card => {
            //create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            
            //add event listener to delete button
            deleteButton.addEventListener("click", deleteProduct)
            //create buttons to increase and decrease quantities
            const quantityButtons = document.createElement("div");
            quantityButtons.classList.add("quantity-buttons");
            card.appendChild(quantityButtons);
            //create decrease button
            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.classList.add("decrease-button");
            quantityButtons.appendChild(decreaseButton);
            //add delete button just between quantitties modifiers
            quantityButtons.appendChild(deleteButton);
            //create increase button
            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.classList.add("increase-button");
            quantityButtons.appendChild(increaseButton);
            //add event listener to all increase button
            increaseButton.addEventListener("click", increaseQuantity)
            //add event listener to all decrease button
            decreaseButton.addEventListener("click", decreaseQuantity)
        })
    }

    function deleteProduct(event){
        //get the parent element of the button that was clicked
        const productCard = event.target.closest(".cart-card");
        //get the name of the product
        const nameProduct = productCard.querySelector(".card__name").textContent;
        //remove the product from the localstorage
        let cart = JSON.parse(localStorage.getItem("so-cart"));
        cart = cart.filter(item => item.Name !== nameProduct);
        //set the localstorage
        localStorage.setItem("so-cart", JSON.stringify(cart));
        //remove the product from the DOM
        productCard.remove();
        //if the cart is empty, display a message
        if(cart.length === 0) {
            const messageEmptyCart = document.createElement("p");
            document.querySelector(".cart-total").style.display = "none;"
            messageEmptyCart.textContent = "Your cart is empty!";
            messageEmptyCart.style.fontSize = "2rem";
            messageEmptyCart.style.fontWeight = "bold";
            myCartContainer.appendChild(messageEmptyCart);
            messageEmptyCart.style.textAlign = "center";
        }
        window.location.reload();
    }

    function increaseQuantity(event){
        //get the parent element of the button that was clicked
        const productCard = event.target.closest(".cart-card");
        //get the name of the product
        const nameProduct = productCard.querySelector(".card__name").textContent;
        //get the quantity of the product
        const quantityProduct = productCard.querySelector(".cart-card__quantity");
        //get the price of the product
        const priceProduct = productCard.querySelector(".cart-card__price");
        //get the cart
        let cart = JSON.parse(localStorage.getItem("so-cart"));
        //find the product in the cart
        const product = cart.find(item => item.Name === nameProduct);
        //increase the quantity of the product
        product.quantity++;
        //update the quantity on the DOM
        quantityProduct.textContent = product.quantity;
        //update the total price of the product
        priceProduct.textContent = (product.quantity * product.Price).toFixed(2);
        //set the localstorage
        localStorage.setItem("so-cart", JSON.stringify(cart));
        //reload
        location.reload();
    }
    
    function decreaseQuantity(event){
        //get the parent element of the button that was clicked
        const productCard = event.target.closest(".cart-card");
        //get the name of the product
        const nameProduct = productCard.querySelector(".card__name").textContent;
        //get the quantity of the product
        const quantityProduct = productCard.querySelector(".cart-card__quantity");
        //get the price of the product
        const priceProduct = productCard.querySelector(".cart-card__price");
        //get the cart
        let cart = JSON.parse(localStorage.getItem("so-cart"));
        //find the product in the cart
        const product = cart.find(item => item.Name === nameProduct);
        //decrease the quantity of the product
        product.quantity--;
        //if the quantity is less than 1 delete product
        if(product.quantity < 1) {
            deleteProduct(event);
            document.querySelector(".cart-total").style.display = "none;"
            return;
        }
        //update the quantity on the DOM
        quantityProduct.textContent = product.quantity;
        //update the total price of the product
        priceProduct.textContent = (product.quantity * product.Price).toFixed(2);
        //set the localstorage
        localStorage.setItem("so-cart", JSON.stringify(cart));
        //reload
        window.location.reload();
    }
    
});