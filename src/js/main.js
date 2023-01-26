import ProductListing from "./ProductList.mjs"
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents"); 
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
listing.init();
