import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData('tents');  // Create instance of ProductData
const element = document.querySelector('.product-list');  // Create variable to hold the element of the list
const listing = new ProductList('Tents', dataSource,element);  // Create instance of the ProductList

listing.init(); // Create the list of products of the given product
