import { writable } from "svelte/store";
import { getCartCount } from "./shoppingCart.mjs";

export const cartCount = writable(getCartCount());
