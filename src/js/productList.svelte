<script>
  import ProductSummary from "./productSummary.svelte";
  import { getData } from "./productData.mjs";

  export let category;

  let promise = getData(category);
</script>

<h2>Top Products</h2>
{#await promise}
  <p>Loading</p>
{:then data}
  <ul class="product-list">
    {#each data as product}
      <li><ProductSummary {product} /></li>
    {/each}
  </ul>
{/await}
