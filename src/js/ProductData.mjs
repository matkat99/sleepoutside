function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export function getProductsByCategory(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}

export async function findProductById(id) {
  const products = await getProductsByCategory();
  return products.find((item) => item.Id === id);
}
