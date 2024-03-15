import Alert from './Alert';
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import {showCountItemsInCart, loadHeaderFooter} from './utils.mjs';

await loadHeaderFooter();
const alert = new Alert();
const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
const productList = new ProductList('Tents', dataSource, element);

productList.init();

showCountItemsInCart();
