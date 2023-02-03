import Cart from "./Cart.mjs";
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");
const productList = new ProductList("tents", ".product-list", dataSource);
let shoppingCart = new Cart();

const product = new ProductDetails(productId, dataSource);
product.init(shoppingCart);
