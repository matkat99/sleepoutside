import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
ProductList(".product-list", category);
