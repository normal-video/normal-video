<template>
  <div id="app">
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
    <router-view>
    </router-view>
     </div>
</template>

<script>
import index from '../src/components/Index'
import tabbar from '../src/components/tabbar/tabbar'
export default {
  name: 'App',
  components: {tabbar, index},
  data () {
    return {
      selected: 'IndexLeader',
      tabs: [require('../src/assets/home.svg'), require('../src/assets/music.svg'), require('../src/assets/video.svg'), require('../src/assets/user.svg')]
    }
  }
}
</script>

<style lang='stylus'>
// @import 'style/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
