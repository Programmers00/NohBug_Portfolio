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
      //User Information
      response: [{
        position: { //Vancouver
          lat: 49.246292,
          lng: -123.116226
        },
        title: "I am Here"
      }]
    } 
  },
  created() {
    //Geolocation
    navigator.geolocation.getCurrentPosition(location => {
        this.response[0].position.lat = location.coords.latitude
        this.response[0].position.lng = location.coords.longitude
      })
  },
  async mounted() {
    try {
      //GoogleMap
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      //Example) Point Markers
      // new google.maps.Marker({
      //   position: {lat: 35.1917857, lng: 129.060646},
      //   map,
      //   title: 'I am here'
      // })

      //geocode: location -> address(City, Country ...)
      //          address -> location(latitude, longitude)
      geocoder.geocode({ location: this.response[0].position }, (results, status) => {
        if(status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        //map's center
        map.setCenter(results[0].geometry.location)
        //map's fit, display ratio...
        map.fitBounds(results[0].geometry.viewport)
      })
      //Point Marker
      this.response.map(data => new google.maps.Marker({ ...data, map })); 
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
