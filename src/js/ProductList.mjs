import { renderListWithTemplate } from "./utils.mjs";

export function productCardTemplate(product) {
  let final_price = Number(product.FinalPrice)
  let suggested_retail_price = Number(product.SuggestedRetailPrice)
  let discount = Math.abs(final_price - suggested_retail_price).toFixed(2)
  
  return `<li id="product-${product.Id}" class="product-card">
            <button id="close-${product.Id}" class="close-pop-up">Close</button>
            <a href="/product_pages/index.html?product=${product.Id}">
            <img
              src="${product.Images.PrimaryMedium}"
              alt="Image of ${product.Name}"
            />
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price"> Now! $${product.FinalPrice}</p></a>
            <p class='saved'>Save: $${discount} <s class='discount'>$${suggested_retail_price}</s><p>
            <button class="show-pop-up" id="${product.Id}">Show Pop-Up</button>
          </li>`
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }
    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.

      // OLD ----- const list = await this.dataSource.getData();
      const list = await this.dataSource.getData(this.category);
      
      // Title
      document.querySelector("#nameCategory").textContent = this.category.charAt(0).toUpperCase() + this.category.slice(1);


      document.getElementById("sortName")
      .addEventListener("click", () => {
        document.querySelector(".product-list").textContent = "";
        list.sort((nameA, nameB) => { 
          if(nameA.Name < nameB.Name) { return -1; }
          if(nameA.Name > nameB.Name) { return 1; }
          return 0;
        })
        this.renderList(list)
      });

      document.getElementById("sortPrice")
      .addEventListener("click", () => {
        document.querySelector(".product-list").textContent = "";
        list.sort((priceA, priceB) => priceA.FinalPrice - priceB.FinalPrice
        )
        this.renderList(list)
      });


      // render the list 
      this.renderList(list)
    }

    // render after doing the first stretch
    renderList(list) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
  }
