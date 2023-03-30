import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import renderHeaderFooter from "./renderHeaderFooter.mjs";

renderHeaderFooter();

const productId = getParam("product");
productDetails(productId, ".product-detail");
