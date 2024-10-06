import { loadHeaderFooter } from "./utils.mjs";

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();


/*
import ProductData from "./ProductDetails.mjs";
import ProductListing from "./ProductList.mjs";

// Create an instance of ProductData
const productDataInstance = new ProductData();



// estruturando ProductListing

// Select the HTML element where the product list will be rendered
const listElement = document.getElementById("product-list");

// Specify the URL for your product data (JSON format)
const productDataUrl = "path/to/your/product-data.json"; // Adjust as necessary

// Create an instance of ProductListing for a specific category (e.g., 'electronics')
const productListing = new ProductListing("your-categor", productDataUrl, listElement);

// Initialize the product listing to fetch and display products
productListing.init();
*/