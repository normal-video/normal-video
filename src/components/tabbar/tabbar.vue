<template>
 <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="Index">
      <img slot="icon" :src="this.atabs[0]">
      主页
    </mt-tab-item>
    <mt-tab-item id="MusicPage">
      <img slot="icon" v-bind:src="this.atabs[1]">
      音乐
    </mt-tab-item>
    <mt-tab-item id="VideoPage">
      <img slot="icon" v-bind:src="this.atabs[2]">
      视频
    </mt-tab-item>
    <mt-tab-item id="PersonalPage">
      <img slot="icon" v-bind:src="this.atabs[3]">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
  data () {
    return {
      message: this.selected,
      atabs: this.tabs
    }
  },
  props: {
    selected: String,
    tabs: Array
  },
  watch: {
    message: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case 'Index':
          this.$router.push('/Index')
          break
        case 'MusicPage':
          this.$router.push('/MusicPage')
          break
        case 'VideoPage':
          this.$router.push('/VideoPage')
          break
        case 'PersonalPage':
          this.$router.push('/PersonalPage')
          break
      }
    }
  }
}
</script>
