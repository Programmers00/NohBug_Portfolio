<template>
  <section>
    <div class="content">
      <Project1/>
      <Project2/>
    </div>
  </section>
</template>

<script>
import Project1 from './Project1.vue'
import Project2 from './Project2.vue'
export default {
  name: 'Projects',
  components: {
    Project1,
    Project2
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}
.content {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
