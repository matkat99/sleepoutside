// Get the current page URL
var currentURL = window.location.href;

// Get the breadcrumb element
var breadcrumb = document.getElementById("breadcrumb");

// Create an array to store the breadcrumb items
var breadcrumbItems = [];

// Add the "Home" breadcrumb item
breadcrumbItems.push("<li><a href=\"/\">Home</a></li>");

// Check if the current page is a product page
if (currentURL.indexOf("/product/") !== -1) {
  // Get the product category
  var productCategory = document.querySelector(".product_meta a").textContent;
  // Add the product category to the breadcrumb
  breadcrumbItems.push("<li>" + productCategory + "</li>");
} else if (currentURL.indexOf("/product-category/") !== -1) {
  // Get the product category
  var productCategory = document.querySelector(".woocommerce-breadcrumb a:last-child").textContent;
  // Get the number of products in the category
  var productCount = document.querySelector(".woocommerce-result-count").textContent.trim().split(" ")[0];
  // Add the product category and count to the breadcrumb
  breadcrumbItems.push("<li>" + productCategory + " &rarr; (" + productCount + " items)</li>");
}

// Add the breadcrumb items to the breadcrumb element
breadcrumb.innerHTML += breadcrumbItems.join("");
