import { getLocalStorage, setLocalStorage, showCountItemsInCart, updateCountItemsInCart} from './utils.mjs';
function renderCartContents() {
  if (localStorage.getItem('so-cart') !== null) { 
  const cartItems = getLocalStorage('so-cart');
  const aggregateCartItems = aggregateCartItemsWithQuantity(cartItems);
  const htmlItems = aggregateCartItems.map((item) => cartItemTemplate(item));
  const total = getCartTotal(cartItems);
  const totalDiv = document.querySelector('.total');
  totalDiv.innerHTML = total === 0 ? '' : cartTotalTemplate(total); // correcting my adding to cart in a new branch
  totalDiv.classList.toggle('hide', total === 0);

  document.querySelector('.product-list').innerHTML = htmlItems.join('');
  document.querySelectorAll('.remove-from-cart').forEach((item)=>{
    item.addEventListener('click', (event)=>{

      removeFromCart(event.target.dataset.id);
    });
  })
  document.querySelectorAll('.addQuantity').forEach((item)=>{
    item.addEventListener('click', (event)=>{
      let qtyElem = document.querySelector('#qty-' + event.target.dataset.id);
      let qtyValue = parseInt(qtyElem.innerHTML);
      qtyValue++;
      qtyElem.innerHTML = qtyValue;
      addItemToCart(event.target.dataset.id);
    });
  })
  document.querySelectorAll('.subQuantity').forEach((item)=>{
    item.addEventListener('click', (event)=>{
      let qtyElem = document.querySelector('#qty-' + event.target.dataset.id);
      let qtyValue = parseInt(qtyElem.innerHTML);
      qtyValue--;
      qtyElem.innerHTML = qtyValue;
      removeQuantityFromCart(event.target.dataset.id);
    });
  })

  document.getElementById('checkout').addEventListener('click', function() {

    window.location.href = '/checkout/index.html';
  });
 }

 setupAddToCartAnimation();
}

function setupAddToCartAnimation() {

  const addQuantityButtons = document.querySelectorAll('.addQuantity');

  addQuantityButtons.forEach(button => {
      button.addEventListener('click', () => {

          animateAddToCart();
      });
  });
}

function animateAddToCart() {

  const svgElement = document.querySelector('.cart svg');
  svgElement.classList.add('pop');

  setTimeout(() => {
      svgElement.classList.remove('pop');
  }, 1000);
}

function aggregateCartItemsWithQuantity(cartItems) {
  let aggregateCartItems = [];

  cartItems.forEach((item) => {

    const i = aggregateCartItems.findIndex(aggregateItem => aggregateItem.Id == item.Id);
    if(i !== -1) {
      aggregateCartItems[i].quantity++;
    } else {
      item.quantity = 1;
      aggregateCartItems.push(item);
    }
  });

  return aggregateCartItems;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <span class="remove-from-cart" data-id="${item.Id}">X</span>
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">Quantity: <span id="qty-${item.Id}">${item.quantity}</span><span class="addQuantity" data-id="${item.Id}"> + </span><span class="subQuantity" data-id="${item.Id}"> - </span></p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function getCartTotal(cartItems) {

  let total = 0;
  cartItems.forEach((item)=>{
    total += item.FinalPrice;
  })
  return total;
}

function cartTotalTemplate(total) {
  return `<div> Your total is going to be: $${total.toFixed(2)} </div>`
}

function removeFromCart(id){
  const cartItems = getLocalStorage('so-cart');
  for (let i = cartItems.length - 1; i >= 0; i--) {
    if (cartItems[i].Id === id) {
      cartItems.splice(i, 1); 
      animateAddToCart();
    }
  }

  setLocalStorage('so-cart',cartItems);
  renderCartContents();
  updateCountItemsInCart()
}

function removeQuantityFromCart(id){
  const cartItems = getLocalStorage('so-cart');
  for (let i = cartItems.length - 1; i >= 0; i--) {
    if (cartItems[i].Id === id) {
      cartItems.splice(i, 1);
      animateAddToCart();
      break;
    }
  }

  setLocalStorage('so-cart',cartItems);
  renderCartContents();
  updateCountItemsInCart()
}

function addItemToCart(Id) {
  let cart = getLocalStorage('so-cart') || [];
  let item = cart.find(i => i.Id == Id)
  cart.push(item);
  setLocalStorage('so-cart', cart);
  renderCartContents();
  updateCountItemsInCart()
}

renderCartContents();