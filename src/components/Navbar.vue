<template>
  <nav>
    <div class="navbar__logo">
      <i class="fas fa-bug"></i>
      <a href="">NohBug</a>
    </div>
    <ul class="navbar__menu">
      <li><a href="">About</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: whitesmoke;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 8px 24px;
}
.navbar__logo {
  font-size: 24px;
  color: whitesmoke;
}
.navbar__logo i{
  color: #d49466;
}
.navbar__menu {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.navbar__menu li {
  padding: 8px 12px;
}
.navbar__menu li:hover {
  background-color: #d49466;
  border-radius: 4px;
}
</style>
