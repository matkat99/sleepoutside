import { loadHeaderFooter } from "./utils.mjs";
import CheckoutForm from "../js/components/CheckoutForm.svelte";

loadHeaderFooter();

new CheckoutForm({
  target: document.querySelector(".checkout-form"),
  props: { key: "so-cart" },
});
