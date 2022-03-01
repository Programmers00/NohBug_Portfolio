<template>
  <div>
    <Header/>
    <Index/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Index from '../views/main/Index'
import Footer from './Footer'
export default {
  name: 'AppMain',
  components: {
    Header,
    Index,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
