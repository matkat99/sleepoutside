// const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
const baseURL = "https://wdd330-backend.onrender.com/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  // constructor(category) {
  //   // this.category = category;
  //   // this.path = `../json/${this.category}.json`;
   //}


  async getData(category) {

    // http://server-nodejs.cit.byui.edu:3000/products/search/tents

    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  
  }
  // getData() {
  //   return fetch(this.path)
  //     .then(convertToJson)
  //     .then((data) => data);
  // }
  
  async findProductById(id) {

    // http://server-nodejs.cit.byui.edu:3000/product/989CH
    
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;

    // const products = await this.getData();
    // return products.find((item) => item.Id === id);
  }
}
