<template>
  <div class="GoogleMap">
  </div>
</template>

<script>
import gmapsInit from '@/utils/gmaps.js'
export default {
  name: 'GoogleMap',
  async mounted() {
    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      geocoder.geocode({ address: 'Austria'}, (results, status) => {
        if(status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
      })
    } catch(error) {
      console.error(error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.GoogleMap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  border: 2px solid #263343;
  border-radius: 4px;
  width: 300px;
  height: 400px;
}
</style>
