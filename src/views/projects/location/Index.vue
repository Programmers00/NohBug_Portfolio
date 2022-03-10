<template>
  <section>
    <Weather/>
    <GoogleMapEmbed/>
    <Clock/>
  </section>
</template>

<script>
import GoogleMapEmbed from './components/GoogleMapEmbed'
import Weather from './components/Weather'
import Clock from './components/Clock'
export default {
  name: 'location',
  components: {
    Weather,
    GoogleMapEmbed,
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
