// import ProductListing from "./ProductList.mjs";
// import ExternalServices from "./ExternalServices.mjs";

import { loadHeaderFooter, numberItems } from "./utils.mjs";
import { newsLetterTemplate, responseToSubmission } from "./NewsLetter.mjs";
import { logProductCard } from "./QuickLook.mjs";

loadHeaderFooter();
numberItems("so-cart", ".numberCartItems");

// const dataSource = new ExternalServices("tents");
// const element = document.querySelector(".product-list");
// const listing = new ProductListing("Tents", dataSource, element);

/* Function that Renders the newsletter form and say "Thanks when submitted" */
newsLetterTemplate();
document
  .getElementById("submit-button")
  .addEventListener("click", responseToSubmission);

logProductCard();

// listing.init();
