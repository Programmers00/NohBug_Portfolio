<template>
  <div class="clock">
    <div>
      <time class="time">{{time.hours}}:{{time.minutes}}:{{time.seconds}}</time>
    </div>
    <div>
      <time>{{time.day}}, {{time.month}} {{time.date}}, {{time.year}}</time>
    </div>
  </div>
</template>

<script>
export default {
  name: 'clock',
  data(){
    return {
      time: {
        hours: '',
        minutes: '',
        seconds: '',
        day: '',
        month: '',
        date: '',
        year: ''
      }
    }
  },
  mounted() {
    this.clock()
  },
  methods:{
    clock() {
      setInterval(() => {
        const date = new Date()
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const day = date.getDay()
        const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
        const month = date.getMonth()

        this.time.hours = String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()
        this.time.minutes = String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()
        this.time.seconds = String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()
        
        this.time.day = days[day]
        this.time.month = months[month]
        this.time.date = date.getDate()
        this.time.year = date.getFullYear()
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock {
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
.time {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}
</style>
