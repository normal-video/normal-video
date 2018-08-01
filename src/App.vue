<template>
  <div id="app">
    <img src="./assets/logo.png">
     <header>
      <router-link to="/Index">Index</router-link>
      <router-link to="/MusicPage">Music</router-link>
      <router-link to="/VideoPage">Video</router-link>
      <router-link to="/PersonalPage">Personal</router-link>
    </header>
    <router-view></router-view>
     </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
