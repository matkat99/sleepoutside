/* eslint-disable no-param-reassign */
function generateBreadcrumb() {
  // Get the current page URL
  const currentPageUrl = window.location.href;

  // Get the breadcrumb element
  const breadcrumbElement = document.getElementById("breadcrumb");

  // Create an empty array to hold the breadcrumb items
  const breadcrumbItems = [];

  // Add the Home item to the breadcrumb, unless we're on the home page
  if (currentPageUrl !== "http://example.com/") {
    breadcrumbItems.push(`<a href="./index.html">Home</a>`);
  }

  // Add the product category item to the breadcrumb, if we're on a product list page
  const productCategory = getParameterByName("category");
  if (productCategory) {
    breadcrumbItems.push(
      `<a href="./product-listing/index.html?category">Product Category</a>`
    );
    breadcrumbItems.push(
      `<a href="./product-listing/index.html?category=${productCategory}">${productCategory}</a>`
    );
  }

  // Add the number of products to the product category item, if we're on a product list page
  const numberOfProducts = getNumberOfProducts();
  if (numberOfProducts !== undefined) {
    const productCategoryItem = breadcrumbItems[breadcrumbItems.length - 1];
    breadcrumbItems[breadcrumbItems.length - 1] = `${productCategoryItem} &rarr; (${numberOfProducts} items)`;
  }

  // Add the breadcrumb items to the breadcrumb element
  breadcrumbElement.innerHTML = breadcrumbItems.join(" &rarr; ");
}

// Get the value of a query string parameter by name
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the number of products on the current page
function getNumberOfProducts() {
  const numberOfProductsElement = document.querySelector(".number-of-products");
  if (numberOfProductsElement) {
    return numberOfProductsElement.textContent;
  }
  return undefined;
}

// Call the generateBreadcrumb function to generate the breadcrumb on page load
generateBreadcrumb();
