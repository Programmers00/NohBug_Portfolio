<template>
  <section>
    <div class="content">
      <Weather/>
    </div>
  </section>
</template>

<script>
import Weather from './Weather'
export default {
  name: 'Project1',
  components: {
    Weather
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 2px solid #263343;
  width: 100%;
  cursor: pointer;
  transition: all 1s;
  box-shadow: 2px 2px 2px 2px whitesmoke;
  opacity: .9;
  transition-timing-function: ease-out;
}
section:hover {
  border: 3px solid #263343;
  transform: scale(1.05);
  box-shadow: 5px 5px 5px 5px whitesmoke;
}
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
