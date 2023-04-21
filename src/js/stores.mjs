import { writable } from "svelte/store";
import { getCartCount } from "./utils.mjs";

export const cartCount = writable(getCartCount());
