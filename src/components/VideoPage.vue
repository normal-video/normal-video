<template>
  <div class="hello">
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
    this.$http.get('./test').then(res => {
      this.video = res.data[0]
      console.log(this.video, 'mockjs又用了？')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
