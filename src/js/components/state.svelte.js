import { getCartCount } from "../utils.mjs";
export const cartState = $state({ count: getCartCount() });
