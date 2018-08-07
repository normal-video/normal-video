<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>PersonalPage</h2>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
  </div>
</template>

<script>
export default {
  name: 'PersonalPage',
  data () {
    return {
      msg: '个人区',
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
