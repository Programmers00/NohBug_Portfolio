<template>
  <div class="weather">
    <div>
      <h2>Weather</h2>
      <!-- <input v-model="request.city_name">
      <button @click="checkWeather">Check Weather</button> -->
    </div>
    <div>
      <h2>{{response.degree}}°C</h2>
      <h3>{{response.weather}}</h3>
      <img v-bind:src="response.icon" alt="weather">
      <h3>{{response.city}}</h3>
      <h3>{{response.country}}</h3>
    </div>
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
        this.latitude = location.coords.latitude
        this.longitude = location.coords.longitude
        console.log(this.latitude, this.longitude)
      })
    },
    mounted() {
      this.checkWeather()
    },
  methods:{
    checkWeather() {
      setTimeout(() => { 
        fetch(`${this.request.base_url}weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.request.api_key}`)
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
}
input {
  border: 2px solid #263343;
  border-radius: 4px;
}
button {
  border: 2px solid lightgray;
  border-radius: 4px;
}
</style>
