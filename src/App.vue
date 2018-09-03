<template>
  <div id="app">
    <tabbar :selected="selected" :tabs='tabs'></tabbar>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
  @import "style/common"
    .router-fade-enter-active, .router-fade-leave-active
      transition: opacity .3s;
    .router-fade-enter, .router-fade-leave-active
      opacity: 0;
</style>
