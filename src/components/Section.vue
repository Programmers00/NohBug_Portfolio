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
  border-style: solid;
  height: 706px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  border-style: solid;
  width: 1200px;
  height: 524px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
