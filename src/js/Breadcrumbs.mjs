// get the breadcrumb element
const breadcrumb = document.querySelector(".breadcrumb");

// create a new list item for the current category
const currentCategory = document.createElement("li");
currentCategory.textContent = "Tents";

// create a new list item for the number of products
const numProducts = document.createElement("li");
numProducts.textContent = "(24 items)";

// add the new list items to the breadcrumb
breadcrumb.appendChild(currentCategory);
breadcrumb.appendChild(numProducts);
