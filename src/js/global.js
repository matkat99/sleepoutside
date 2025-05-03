import {showCountItemsInCart, loadHeaderFooter} from './utils.mjs';
//Things that happen on every page in the site
loadHeaderFooter(() => {
    //Things that have to happen AFTER the header and footer load
    showCountItemsInCart();
    document.querySelector('.search form').addEventListener('submit', function(event) {
        event.preventDefault();
        var searchQuery = this.querySelector('input[type="text"]').value;
        window.location.href = '/product-listing/index.html?search=' + searchQuery;
    });
});
//