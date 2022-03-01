<template>
  <nav>
    <div class="navbar__logo">
      <i class="fas fa-bug"></i>
      <a href="">NohBug</a>
    </div>
    <div class="navbar__menu__toggleBtn">
      <i class="fas fa-bars navbar__toggleIcon"></i>
      <input type="checkbox" id="navbar__toggleBtn" class="navbar__toggleBtn" checked="unchecked">
      <ul class="navbar__menu">
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <label for="navbar__toggleBtn"></label>
    </div>
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
  padding: 8px;
}
.navbar__logo {
  font-size: 24px;
  color: whitesmoke;
}
.navbar__logo i{
  color: #d49466;
}
.navbar__menu__toggleBtn i,
.navbar__menu__toggleBtn input{
  display: none;
}
.navbar__menu {
  display: flex;
  font-size:  16px;
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

@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
  .navbar__menu__toggleBtn {
    display: flex;
    width: 100%;
  }
  .navbar__menu__toggleBtn i {
    display: flex;
    position: absolute;
    font-size: 24px;
    color: #d49466;
    padding: 4px;
    top: 15px;
    right: 12px;
  }
  .navbar__menu__toggleBtn input {
    display: flex;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 15px;
    right: 12px;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }
  .navbar__menu {
    display: inline;
    flex-direction: column;
    width: 100%;
  }
  .navbar__toggleBtn:checked + .navbar__menu{
    display: none;
  }
  .navbar__toggleBtn:checked + .navbar__toggleIcon{
    color: whitesmoke;
  }
}
</style>