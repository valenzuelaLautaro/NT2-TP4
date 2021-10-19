<template>

  <div id="app" class="container">
    <div class="jumbotron my-3">
      <NavBar />
    </div>
  </div>

</template>

<script>

import NavBar from './componentes/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
