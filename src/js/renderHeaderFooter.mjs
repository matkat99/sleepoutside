import { html, render } from "htm/preact";
import MainFooter from "./mainFooter.mjs";
import MainHeader from "./mainHeader.mjs";
import { getCartCount } from "./utils.mjs";

export default function renderHeaderFooter() {
  const cartCount = getCartCount();
  render(
    html`<${MainHeader} cartCount=${cartCount} />`,
    document.querySelector("#main-header")
  );
  render(html`<${MainFooter} />`, document.querySelector("#main-footer"));
}
