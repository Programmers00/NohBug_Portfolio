<template>
  <div class="GoogleMap">
    <iframe
      width="100%"
      height="100%"
      frameborder="0" style="border:0"
      :src="`https://www.google.com/maps/embed/v1/view?key=${api_key}&center=${lat},${lng}&zoom=19&maptype=satellite`" allowfullscreen>
    </iframe>
  </div>
</template>
<script>
export default {
  name: 'GoogleMapEmbed',
  data(){
    return {
      //User Information
      api_key: "AIzaSyDKKpsgIE6hXE-1ynKuFVOBe-6zyVHMcuA",
      lat: 49.246292,
      lng: -123.116226,
    } 
  },
  created() {
    //Geolocation
    navigator.geolocation.getCurrentPosition(location => {
        this.lat = location.coords.latitude
        this.lng = location.coords.longitude
    })
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
  min-width: 300px;
  height: 400px;
}
</style>
