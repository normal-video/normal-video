<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>MusicPage</h2>
  </div>
</template>

<script>
export default {
  name: 'MusicPage',
  data () {
    return {
      msg: '音乐区',
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
