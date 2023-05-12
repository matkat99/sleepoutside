<script>
  import ProductSummary from "./ProductSummary.svelte";
  import { getProductsByCategory } from "../externalServices.mjs";

  export let category;

  let promise = getProductsByCategory(category);
</script>

<h2>Top Products: {category}</h2>
{#await promise}
  <p>Loading</p>
{:then data}
  <ul class="product-list">
    {#each data as product}
      <li class="product-card"><ProductSummary {product} /></li>
    {/each}
  </ul>
{/await}
