import { loadHeaderFooter, numberItems } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";


loadHeaderFooter();
numberItems("so-cart");

const dataSource = new ProductData("tents"); 
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
listing.init();
