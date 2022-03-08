<template>
  <section>
    <Weather/>
    <GoogleMap/>
    <Clock/>
  </section>
</template>

<script>
import GoogleMap from './components/GoogleMap'
import Weather from './components/Weather'
import Clock from './components/Clock'
export default {
  name: 'location',
  components: {
    Weather,
    GoogleMap,
    Clock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 96px 24px 24px;
  gap: 10px;
}
</style>
