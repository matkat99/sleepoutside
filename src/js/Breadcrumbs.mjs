import { getParam } from "./utils.mjs";
const category = getParam("category");
const product = getParam("product");

// Create the breadcrumb navigation
const breadcrumbElement = document.querySelector(".breadcrumb");
let breadcrumbHtml = "";
if (category) {
  breadcrumbHtml += `<a href="/">Home</a> > <a href="/?category=${category}">${category}</a>`;
  if (product) {
    breadcrumbHtml += ` > ${product}`;
  }
} else {
  breadcrumbHtml += "Home";
}
breadcrumbElement.innerHTML = breadcrumbHtml;
