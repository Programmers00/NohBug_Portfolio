<template>
  <section>
    <input type="radio" name="slide" id="slide01" checked>
    <input type="radio" name="slide" id="slide02">
    <input type="radio" name="slide" id="slide03">

    <div class="slide__wrap">
      <ul class="slide__list">
        <li>
          <a href="">
            <label for="slide03" class="left"></label>
            <img src="@/assets/images/slide01.jpg" alt="">
            <label for="slide02" class="right"></label>
          </a>
        </li>
        <li>
          <a href="">
            <label for="slide01" class="left"></label>
            <img src="@/assets/images/slide02.jpg" alt="">
            <label for="slide03" class="right"></label>
          </a>
        </li>
        <li>
          <a href="">
            <label for="slide02" class="left"></label>
            <img src="@/assets/images/slide03.jpg" alt="">
            <label for="slide01" class="right"></label>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Project2'
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
section input[id*="slide"] {
  display: none;
}
section .slide__wrap {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
section .slide__list {
  white-space: nowrap;
  font-size: 0;
  padding: 0px;
}
section .slide__list > li {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  transition: all .5s;
}
section .slide__list > li > a {
  display: block;
  position: relative;
}
section .slide__list > li > a img {
  width: 100%;
}
section .slide__list label {
  position: absolute;
  z-index:10;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px;
  cursor: pointer;
}
section .slide__list .left {
  left: 30px;
  transition: all .8s;
  background:url('../assets/images/left.png') center center / 100% no-repeat;
}
section .slide__list .right {
  right: 30px;
  transition: all .8s;
  background:url('../assets/images/right.png') center center / 100% no-repeat;
}
section [id="slide01"]:checked ~ .slide__wrap .slide__list > li {transform: translateX(0%);}
section [id="slide02"]:checked ~ .slide__wrap .slide__list > li {transform: translateX(-100%);}
section [id="slide03"]:checked ~ .slide__wrap .slide__list > li {transform: translateX(-200%);}
</style>
