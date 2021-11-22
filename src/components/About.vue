<template>
  <section>
    <div class="content">
        <Article/>
        <Picture/>
    </div>
  </section>
</template>

<script>
import Article from './Article'
import Picture from './Picture'
export default {
  name: 'Section',
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
