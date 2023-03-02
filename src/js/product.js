import { getParam } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productId = getParam("product");
ProductDetails(productId, "main");
