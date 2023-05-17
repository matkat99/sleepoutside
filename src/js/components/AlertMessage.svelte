<script>
  export let message = "";
  function handleClick(e) {
    document.body.removeChild(this.parentElement);
  }
</script>

<div class="alert">
  <p>{message}</p>
  <span on:click={handleClick}>X</span>
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
  }
  .alert > span {
    cursor: pointer;
  }
</style>
