import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productId = getParam("product");
productDetails(productId, ".product-detail");
