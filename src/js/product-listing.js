import ProductListing from "./ProductList.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter, numberItems, getParam } from "./utils.mjs";
import { logProductCard } from "./QuickLook.mjs";

const category = getParam("category");

const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductListing(category, dataSource, element);

if (category) {
  const breadcrumb = document.querySelector(".breadcrumb");
  breadcrumb.innerHTML = `${category} &rarr; (${listing.products.length} items)`;
}

logProductCard();
loadHeaderFooter();
numberItems("so-cart",".numberCartItems");

listing.init();
