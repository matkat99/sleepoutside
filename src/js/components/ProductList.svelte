<script>
  import ProductSummary from "./ProductSummary.svelte";
  import { getData } from "../productData.mjs";

  let { category } = $props();

  let promise = getData(category);
</script>

<h2>Top Products</h2>
{#await promise}
  <p>Loading</p>
{:then data}
  <ul class="product-list">
    {#each data as product}
      <li class="product-card"><ProductSummary {product} /></li>
    {/each}
  </ul>
{/await}
