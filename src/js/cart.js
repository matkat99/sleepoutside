import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  
  const cartItem = getLocalStorage('so-cart');
  const htmlItem = cartItemTemplate(cartItem);
  document.querySelector('.product-list').innerHTML = htmlItem;
  // currently only one item in local storage, future implementations will have a list of items.

  // const cartItems = getLocalStorage('so-cart');
  // console.log(cartItems);
  // const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  // document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card-divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
