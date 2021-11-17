<template>
  <picture>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" alt="Image">
  </picture>
</template>

<script>
export default {
  name: 'Picture'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
picture {
  border-style: solid;
  width: 524px;
  height: 524px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  border-radius: 4px;
  padding: 4px;
}
</style>
