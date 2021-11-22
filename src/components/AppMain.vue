<template>
  <div>
    <Header/>
    <About/>
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import About from './About'
import Footer from './Footer.vue'
import Projects from './Projects.vue'
export default {
  name: 'AppMain',
  components: {
    Header,
    About,
    Projects,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
