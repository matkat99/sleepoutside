import ProductListing from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";
import { loadHeaderFooter, numberItems } from "./utils.mjs";
import { newsLetterTemplate } from "./news_sign_up.mjs"
import { responseToSubmission } from "./news_sign_up.mjs"
loadHeaderFooter();
numberItems("so-cart");
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
/* Function that Renders the newsletter form and say "Thanks when submitted" */
newsLetterTemplate()
document.getElementById("submit-button").addEventListener("click", responseToSubmission);
listing.init();
