import { numberItems } from "./utils.mjs";
const breadcrumb = document.querySelector(".breadcrumb");
const category = new URLSearchParams(window.location.search).get("category");

if (category) {
  breadcrumb.innerHTML = `<a href="/">Home</a> > <a href="/product-listing/index.html">${category}</a> > (${numberItems} items)`;
} else {
  breadcrumb.innerHTML = `<a href="/">Home</a>`;
}
