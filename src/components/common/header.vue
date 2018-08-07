<template>
<my-header>
<div class="search_bar">
<div class="user_icon_box"><div class="user_icon"><img class="user_icon_img" src="../../assets/logo.png" alt=""></div></div>
<div class="title">ZIZIZI</div>
<div class="search_icon"><img class="search_icon_img" src="../../assets/search.svg" alt=""></div>
</div>
</my-header>
</template>
<script>
export default {
  data () {
    return {
      msg: 'header',
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
<style >
my-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: aqua;
  color: black;
}
.title{
  text-align: center;
}
.search_bar{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  line-height: 4rem;
}
.user_icon{
  position: absolute;
  top: 1.75rem;
  left: 1.75rem;
  z-index: 1;
}
.user_icon_img{
  background: #fff;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 2px solid aqua;
  overflow: hidden;
}
.search_icon_img{
      width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: 1rem;
    top: 1.2rem;
}
</style>
