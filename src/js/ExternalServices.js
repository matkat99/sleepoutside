const baseURL = 'http://157.201.228.93:2992/';
// const baseURL = 'http://127.0.0.1:3000/';
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data
  } else {
    throw { name: 'servicesError', message: data };
  }
}

export default class ExternalServices {
  constructor() {
    //Using the API means we don't need to tie the dataSource to a specific category anymore. So we can remove this in the constructor.
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  getData(category) {
    // instead we will pass the category we want in here when we need it.
    return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }
  async findProductById(id) {
    return await fetch(baseURL + `product/${id}`).then(convertToJson)
      .then((data) => data.Result);
  }
  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
}
