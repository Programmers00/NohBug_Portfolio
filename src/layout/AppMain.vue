<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'AppMain',
  components: {
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
