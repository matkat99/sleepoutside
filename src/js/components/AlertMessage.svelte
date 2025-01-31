<script>
  let { message = "" } = $props();
  function handleClick(e) {
    document.body.removeChild(this.parentElement);
  }
</script>

<div class="alert" role="alert">
  <p>{message}</p>
  <button aria-label="Close alert" onclick={handleClick}>X</button>
</div>

<style>
  .alert {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    background-color: var(--primary-color);
    border: 1px solid darkorange;
  }
  .alert > p {
    margin: 0;
    flex: 1 0 auto;
  }
  .alert > button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    flex: 0 0 100px;
    color: var(--secondary-color);
  }
</style>
