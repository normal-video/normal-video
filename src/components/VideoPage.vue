<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>VideoPage</h2>
  </div>
</template>

<script>
export default {
  name: 'VideoPage',
  data () {
    return {
      msg: '视频区',
      video: {}
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
