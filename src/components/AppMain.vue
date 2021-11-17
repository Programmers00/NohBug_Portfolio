<template>
  <div>
    <Header/>
    <Section/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Section from './Section'
import Footer from './Footer.vue'
export default {
  name: 'AppMain',
  components: {
    Header,
    Section,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
