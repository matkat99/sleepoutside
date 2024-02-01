// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

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

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);

  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// function to take an optional object and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

// function to dynamically load the header and footer into a page
export async function loadHeaderFooter() {
  try {
    const headerTemplate = await loadTemplate("../partials/header.html");
    const headerElement = document.getElementById("header-dinamico");
    const footerTemplate = await loadTemplate("../partials/footer.html");
    const footerElement = document.getElementById("footer-dinamico");

    await Promise.all([
      renderWithTemplate(headerTemplate, headerElement),
      renderWithTemplate(footerTemplate, footerElement)
    ]);


    // Ahora los elementos han sido renderizados, puedes seleccionar el elemento con id "cart-count"
    const cartCountElement = document.getElementById("cart-count");
    return cartCountElement;
  } catch (error) {
    return
  }
}

export function alertMessage(message, scroll = true) {

  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>close</span>`;

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
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}
