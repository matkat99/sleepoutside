import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import {getParam, loadHeaderFooter} from './utils.mjs'
const category = getParam('category');
const search = getParam('search');
const dataSource = new ProductData();
const element = document.querySelector('.product-list');
let productList
if(search){
    productList = new ProductList(search, dataSource, element);
}else if(category){
    productList = new ProductList(category, dataSource, element);
}

productList.init();