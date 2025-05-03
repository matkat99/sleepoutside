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
  if(clear) parentElement.clear();
  parentElement.insertAdjacentHTML(position, htmlItems.join(""));
}

export function renderWithTemplate(template, parentElement, data = null, callback = null){
  //const html = templateFn(data);
  //if(clear) parentElement.clear();
  parentElement.insertAdjacentHTML('afterbegin', template);

  //literally zero clue why this is being done, also data is never actually used in this function, so why pass it with the template????
  if(callback) {
    callback(data);
  }
}

export function showCountItemsInCart(){
  let cart = getLocalStorage('so-cart');
  if(cart){
    if(cart.length > 0){
      const html = cartCountTemplate(cart.length);
      const cartElement =  document.querySelector('header .cart');
      cartElement.insertAdjacentHTML('afterbegin', html);
    }
  }
}
export function updateCountItemsInCart(){
  const cartItems = getLocalStorage('so-cart');
  let cartCount = cartItems.length;
  let cartCountElement = document.querySelector('header .cart .superscript');
  if(cartCountElement){
    cartCountElement.innerHTML = cartCount;
  }else{
    let html = cartCountTemplate(cartCount);
      let element = document.querySelector('header .cart');
      element.insertAdjacentHTML('afterbegin', html);
  }
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
export async function loadHeaderFooter(callback){
  const headerTemplate = await loadTemplate('/partials/header.html');
  const headerElem = document.getElementById("header");

  const footerTemplate = await loadTemplate('/partials/footer.html');
  const footerElem = document.getElementById("footer");

  renderWithTemplate(headerTemplate, headerElem);
  renderWithTemplate(footerTemplate, footerElem);
  if(callback){
    callback();
  }

}

async function loadTemplate(path) {
  const result = await fetch(path);
  const template = await result.text();
  return template;
}

export function alertMessage(message, scroll = true, duration = 3000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  
  if (scroll) window.scrollTo(0, 0);

}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => alert.parentNode.removeChild(alert));
}