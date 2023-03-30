import { html, render } from "htm/preact";
import { useEffect, useState } from "preact/hooks";
import { getLocalStorage } from "./utils.mjs";

function CartItem({ item }) {
  return html`<li class="cart-card divider">
    <a
      href="/product_pages/index.html?product=${item.Id}"
      class="cart-card__image"
    >
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="/product_pages/index.html?product=${item.Id}">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  function init() {
    const items = getLocalStorage("so-cart");
    setCartItems(items);
  }
  console.log(cartItems);
  useEffect(init, []);

  return html`<h2>My Cart</h2>
    <ul class="product-list">
      ${cartItems.map((item) => html`<${CartItem} item=${item} />`)}
    </ul>`;
}

// this is another option for rendering our component...we can import and call this function instead of calling render somewhere else.
export function renderShoppingCart(selector) {
  render(html`<${ShoppingCart} />`, document.querySelector(selector));
}
