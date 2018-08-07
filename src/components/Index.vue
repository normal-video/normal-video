<template>
<my-header></my-header>
</template>

<script>
import MyHeader from '../../src/components/common/header'
export default {
  name: 'Index',
  components: {MyHeader},
  data () {
    return {
      msg: '老首页',
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
