<template>
  <div class="weather">
    <div>
      <h2>Weather</h2>
      <h3>Check the current weather of your city</h3>
      <input v-model="request.city_name">
      <button @click="checkWeather">Check Weather</button>
    </div>
    <div>
      <h2>{{response.degree}}°C</h2>
      <h3>{{response.weather}}</h3>
      <img src="" alt="">
      <h3>{{response.location}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
    data(){
      return {
        request: {
          base_url: 'api.openweathermap.org/data/2.5/',
          city_name: 'seoul',
          api_key: 'b81580e434628d884e50b02bdd2effb8'
        },
        response: {
          degree: '15',
          weather: 'Clouds',
          icon: '',
          location: 'Busan, KR'
        }
      } 
    },
  methods:{
    checkWeather() {
      setTimeout(() => { fetch(`${this.request.base_url}weather?q=${this.request.city_name}&appid=${this.request.api_key}`)
      .then(response => response)
      .then(result => this.results(result)) }, 1000)
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
