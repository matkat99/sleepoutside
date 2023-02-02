import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import {cartQuantitySpan} from "./superscriptNumber";


loadHeaderFooter();

const cartQuantity = new cartQuantitySpan("cart-quantity");
const itemQuantity = new cartQuantity(cartQuantity);
itemQuantity.init();
const dataSource = new ProductData("tents"); 
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
listing.init();
