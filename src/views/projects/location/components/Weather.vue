<template>
  <div class="weather">
      <!-- <input v-model="request.city_name">
      <button @click="checkWeather">Check Weather</button> -->
      <span>{{response.degree}}°C</span>
      <span>{{response.weather}}</span>
      <img v-bind:src="response.icon" alt="weather">
      <span>{{response.city}}</span>
      <span>{{response.country}}</span>
  </div>
</template>

<script>
export default {
  name: 'Weather',
    data(){
      return {
        request: {
          base_url: 'https://api.openweathermap.org/data/2.5/',
          api_key: 'b81580e434628d884e50b02bdd2effb8'
        },
        response: {
          degree: '',
          weather: '',
          icon: '',
          city: '',
          country: '',
          latitude: '',
          longitude: ''
        }
      } 
    },
    created() {
      navigator.geolocation.getCurrentPosition(location => {
        this.response.latitude = location.coords.latitude
        this.response.longitude = location.coords.longitude
        // console.log(this.lat, this.lng)
      })
    },
    mounted() {
      this.checkWeather()
    },
  methods:{
    checkWeather() {
      setTimeout(() => { 
        fetch(`${this.request.base_url}weather?lat=${this.response.latitude}&lon=${this.response.longitude}&appid=${this.request.api_key}`)
          .then(response => response.json())
          .then(result => this.results(result))
          }, 1000)
    },
    results(result) {
      this.response.degree = Math.round(result.main.temp-273) //Kelvin - 273 = Celscius
      this.response.weather = result.weather[0].main
      this.response.icon = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
      this.response.city = result.name
      this.response.country = result.sys.country
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  border: 2px solid #263343;
  border-radius: 4px;
  min-width: 300px;
  height: 400px;
  font-size: 25px;
  font-weight: bold;
  gap: 10px;
}
</style>
