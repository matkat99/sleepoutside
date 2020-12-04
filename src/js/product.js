import ProductData from './productData.js';
import ProductDetails from './productDetails.js';
import { getParam } from './utils.js';

const dataSource = new ProductData('../json/tents.json');
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init();
