<template>
  <section>
    <div class="content">
        <Article/>
        <Picture/>
    </div>
    <div>
      <Slide/>
      </div>
  </section>
</template>

<script>
import Article from './components/Article'
import Picture from './components/Picture'
import Slide from './components/Slide'
export default {
  name: 'about',
  components: {
    Article,
    Picture,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 24px 24px;
}
.content {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap-reverse;
}
</style>
