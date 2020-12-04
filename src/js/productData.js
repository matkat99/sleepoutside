function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ProductData  {
  constructor(path) {
    this.path = path;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson).then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData()
    return products.find((item) => item.Id === id);
  }
}
