<template>
  <picture>
    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="Image">
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
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 50%;
  width: 524px;
  height: 524px;
  background-color: whitesmoke;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
