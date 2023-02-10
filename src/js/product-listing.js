import ProductListing from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";
import { loadHeaderFooter, numberItems, getParam } from "./utils.mjs";
import { logProductCard } from "./QuickLook.mjs";

loadHeaderFooter();
numberItems("so-cart");

const category = getParam("category");

const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductListing(category, dataSource, element);

logProductCard();

listing.init();
