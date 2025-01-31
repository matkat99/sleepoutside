import { mount } from "svelte";
import { loadHeaderFooter } from "./utils.mjs";
import CheckoutForm from "../js/components/CheckoutForm.svelte";

loadHeaderFooter();

const checkoutform = mount(CheckoutForm, {
  target: document.querySelector(".checkout-form"),
  props: { key: "so-cart" },
});
