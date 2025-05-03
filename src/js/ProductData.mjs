const baseURL = import.meta.env.VITE_SERVER_URL;
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
    
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async getData(category, sort) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    // const sorted = data.sort(this.productSort(data, sort));
    const sorted = this.productSort(data.Result, sort);
    return sorted;
  }
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  productSort(data, selection) {
    const nameSort = data;
    if (selection == "name") {
      nameSort.sort((a, b) => {
        const nameA = a.Brand.Name;
        const nameB = b.Brand.Name;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      } else if (selection == "price") {
        nameSort.sort((a, b) => a.FinalPrice - b.FinalPrice);
      }
    return nameSort;
  }
}
