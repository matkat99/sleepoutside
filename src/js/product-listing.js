import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import {getParam, loadHeaderFooter} from './utils.mjs'
loadHeaderFooter();
const category = getParam('category');
const selectElement = document.querySelector('.sProd');
const sort = selectElement.value;
const dataSource = new ProductData();
const element = document.querySelector('.product-list');
const productList = new ProductList(category, dataSource, element, sort);
productList.init();

document.querySelector('.sProd').addEventListener('change', (event) => {
    // console.log(event.target.value);
    const sort = event.target.value;
    const dataSource = new ProductData();
    const element = document.querySelector('.product-list');
    const productList = new ProductList(category, dataSource, element, sort);
    document.querySelector('.product-list').innerHTML = '';
    productList.init();
});