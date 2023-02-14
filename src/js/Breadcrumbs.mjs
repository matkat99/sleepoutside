import { numberItems } from "./utils.mjs";
const breadcrumb = document.querySelector(".breadcrumb");
const path = window.location.pathname;

if (path === "/") {
  breadcrumb.style.display = "none"; // hide breadcrumb on home page
} else if (path.startsWith("/product-category")) {
  const category = path.split("/").pop();
  const numItems = numberItems("so-cart"); // replace with actual count
  breadcrumb.innerHTML = `
    <li><a href="../index.html">Home</a></li>
    <li><a href="../product-listing/index.html?category">Product Category</a></li>
    <li>./product-listing/index.html?${category}=tents</li>
    <li class="active">${numItems} items</li>
  `;
} else if (path.startsWith("/product/")) {
  const category = "Product Category"; // replace with actual category
  const product = path.split("/").pop();
  breadcrumb.innerHTML = `
    <li><a href="/">Home</a></li>
    <li><a href="/product-category">${category}</a></li>
    <li>${product}</li>
  `;
}
