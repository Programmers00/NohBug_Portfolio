<template>
  <div>
    <Header/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import About from './About'
import Footer from './Footer.vue'
export default {
  name: 'AppMain',
  components: {
    Header,
    About,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
