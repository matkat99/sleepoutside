// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParam(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(templateFn, parentElement, list, position='afterbegin', clear=false){
  const htmlItems = list.map(templateFn);
  if(clear) listTarget.clear();
  parentElement.insertAdjacentHTML(position, htmlItems.join(""));
}

export function showCountItemsInCart(){
  let cartCount = getLocalStorage('so-cart').length;
  if(cartCount > 0){
    let html = cartCountTemplate(cartCount);
    let element = document.querySelector('header .cart');
    element.insertAdjacentHTML('afterbegin', html);
  }
}
export function updateCountItemsInCart(){
  const cartItems = getLocalStorage('so-cart');
  let cartCount = cartItems.length;
  document.querySelector('header .cart .superscript').innerHTML = cartCount;
}
function cartCountTemplate(cartCount){
  return `<div class="superscript">${cartCount}</div>`;
}

export function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}