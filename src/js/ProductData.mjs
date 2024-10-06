function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function findProductById(id) {
  const products = await getData();
  return products.find((item) => item.Id === id);
} 

export function getData(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}


export default class ProductData  {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {    
    return fetch(this.path)
      //.then(convertToJson).then((data) => data);
      .then(convertToJson)
      .then((data) => data.filter((item) => item.Id != '989CG' && item.Id != '880RT'));
  }
  async findProductById(id) {
    const products = await this.getData()
    return products.find((item) => item.Id === id);
  }
}