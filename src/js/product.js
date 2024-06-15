import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// Inicializa o array 'products' com os itens do 'localStorage', se houver
let products = getLocalStorage("so-cart") || [];

// Função para adicionar produtos ao carrinho
function addProductToCart(product) {
  products.push(product);
  setLocalStorage("so-cart", products); // Salva no localStorage
  window.location.href = "../cart/index.html";
}

// Manipulador de evento para o botão "Add to Cart"
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Adiciona o listener ao botão "Add to Cart"
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
