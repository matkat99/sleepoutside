<script>
  export let product = {};
</script>

<section>
  <a href="/product_pages/index.html?product={product.Id}">
    <img src={product.Images.PrimaryMedium} alt="Image of {product.Name}" />
    <h3 class="card__brand">{product.Brand.Name}</h3>
    <h2 class="card__name">{product.NameWithoutBrand}</h2>
    <p class="product-card__price">${product.FinalPrice}</p></a
  >
</section>
