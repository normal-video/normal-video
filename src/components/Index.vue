<template>
<div class="main-index-header">
<my-header></my-header>
<my-banner></my-banner>
</div>
</template>
<script>
import MyHeader from '../../src/components/common/header'
import MyBanner from '../../src/components/common/banner/banner'
export default {
  name: 'Index',
  components: {MyHeader, MyBanner},
  methods: {
    handleClick (id) {
      console.log(id)
    }
  }
}
</script>
<style scoped>
.main-index-header{
  position: fixed;
  width: 100%;
}
</style>
