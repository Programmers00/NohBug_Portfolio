<template>
  <div class="GoogleMap">
  </div>
</template>

<script>
import gmapsInit from '@/utils/gmaps.js'
export default {
  name: 'GoogleMap',
  data(){
    return {
      response: {
        latitude: '',
        longitude: ''
      }
    } 
  },
  created() {
    navigator.geolocation.getCurrentPosition(location => {
        this.latitude = location.coords.latitude
        this.longitude = location.coords.longitude
        console.log(this.latitude, this.longitude)
      })
  },
  async mounted() {
    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      new google.maps.Marker({
        position: {lat: 35.1917857, lng: 129.060646},
        map,
        title: 'I am here'
      })
      geocoder.geocode({ address: 'busan'}, (results, status) => {
        // console.log("#address", address)
        console.log("#(results[0].geometry.location", (results[0].geometry.location))
        console.log("#results[0].geometry.viewport", results[0].geometry.viewport)
        if(status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)

      })
    } catch(error) {
      console.error(error)
    }
  },
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
