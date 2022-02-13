<template>
    <footer>
      <ul>
        <a href="https://www.instagram.com/eunshinnoh/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/eunshin.noh" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nes0410@gmail.com" target="_blank"><i class="fas fa-at"></i></a>
      </ul>
      <div class="navbar__logo">
        <i class="fas fa-bug"></i>
        <a href="#">NohBug</a>
    </div>
    </footer>
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
footer {
  flex-direction: column;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
footer ul {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  color: #263343;
  list-style: none;
  padding-left: 0;
}
footer ul a {
  padding: 8px;
}
.navbar__logo {
  padding: 8px;
  font-size: 24px;
  color: whitesmoke;
}
.navbar__logo i{
  color: #d49466;
}
</style>
