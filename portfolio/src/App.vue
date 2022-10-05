<!-- <template>
  <div id="app">
    <HomePage/>
  </div>
</template> -->

<template>
  <div class="app">
  <router-view/>
  </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.css"
// import HomePage from './components/HomePage'

// export default {
//   name: 'App',
//   components: {
//     HomePage}
// }

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>