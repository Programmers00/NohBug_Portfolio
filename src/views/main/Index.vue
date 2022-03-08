<template>
  <section>
    <Article/>
    <Picture/> 
  </section>
</template>

<script>
import Article from './components/Article'
import Picture from './components/Picture'
export default {
  name: 'About',
  components: {
    Article,
    Picture
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
  padding: 96px 24px 24px;
  gap: 10px;
}
</style>
