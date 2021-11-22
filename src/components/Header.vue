<template>
  <header>
    <Navbar/>
  </header>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Header',
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
  top:0;
  right:0;
}
</style>
