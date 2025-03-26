const baseURL = import.meta.env.VITE_SERVER_URL;
const checkoutURL = "https://wdd330-backend.onrender.com/checkout"
//const checkoutURL = "https://wdd330-backend.onrender.com/checkout"

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}


export default class ExternalServices  {
  constructor(category) {
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    //console.log(data)
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(checkoutURL, options).then(convertToJson);
  }
}
