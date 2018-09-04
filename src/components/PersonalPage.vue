<template>
  <div class="personal-page">
    <mt-header class="normal-header" fixed title="我">
      <i class="iconfont" slot="right">&#xe7d4;</i>
    </mt-header>
    <div class="main">
      <div class="personal-info">
        <div class="head-icon"></div>
        <div class="infos">
          <div class="user-name">name</div>
          <div class="coins">233</div>
        </div>
        <div class="logout">注销</div>
      </div>
      <mt-cell class="cells" title="信息动态">
        <i class="iconfont cell-icon" slot="icon">&#xe78a;</i>
      </mt-cell>
      <mt-cell class="cells" title="离线任务">
        <i class="iconfont cell-icon" slot="icon">&#xe7d9;</i>
      </mt-cell>
      <mt-cell class="cells" title="历史纪录">
        <i class="iconfont cell-icon" slot="icon">&#xe789;</i>
      </mt-cell>
      <mt-cell class="cells" title="收藏夹">
        <i class="iconfont cell-icon" slot="icon">&#xe7df;</i>
      </mt-cell>
      <mt-cell class="cells" title="关注的人">
        <i class="iconfont cell-icon" slot="icon">&#xe7ae;</i>
      </mt-cell>
      <mt-cell class="cells" title="消费记录">
        <i class="iconfont cell-icon" slot="icon">&#xe7b0;</i>
      </mt-cell>
      <mt-cell class="cells" title="设置">
        <i class="iconfont cell-icon" slot="icon">&#xe78e;</i>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PersonalPage',
  data () {
    return {
      msg: '个人区',
      video: {}
    }
  },
  created () {
    console.log(mapActions, mapState, 'mapstate')
    console.log(this.user)
    // this.getUserInfo()
  },
  // methods: {
  //   ...mapActions([
  //     'getUserInfo'
  //   ])
  // },
  computed: {
    ...mapState([
      'user'
    ])
  },
  watch: {
    // user: {
    //   handler (newone) {
    //     console.log(newone)
    //   },
    //   deep: true
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../style/mixin"
  .personal-page
    .normal-header
      color #fff
      background $p
    .cell-icon
      color $p
      font-size 2rem
      margin-right 1rem
    .cells
      margin 0 0 .5rem 0
      .mint-cell-wrapper
        background-image none
      .mint-cell-title
        display flex
        align-items center
    .personal-info
      margin .5rem 0
      padding .5rem 0
      background #fff
      display flex
      align-items center
      justify-content space-between
</style>
