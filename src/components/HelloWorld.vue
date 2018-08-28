<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links2222</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '发挥预热111',
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
