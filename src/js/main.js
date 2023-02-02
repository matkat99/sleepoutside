import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import {addToCartBtn,cartQuantitySpan} from "./superscriptNumber";

cartQuantitySpan();
addToCartBtn();
loadHeaderFooter();

const dataSource = new ProductData("tents"); 
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
listing.init();
