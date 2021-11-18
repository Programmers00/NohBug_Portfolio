<template>
  <div class="footer__Outline">
    <footer>
      <ul>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-facebook-square"></i></a>
        <a href=""><i class="fas fa-at"></i></a>
      </ul>
      <div class="navbar__logo">
      <i class="fas fa-bug"></i>
      <a href="#">NohBug</a>
    </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: #263343;
}
.footer__Outline {
  border-style: solid;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer {
  flex-direction: column;
  border-style: solid;
  width: 192px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer ul {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 24px;
  color: #263343;
  list-style: none;
  padding-left: 0;
}
.navbar__logo {
  font-size: 16px;
  color: whitesmoke;
}
.navbar__logo i{
  color: #d49466;
}
</style>
