<template>
<swiper class="swiper-wrapper" :options="swiperOption">
<swiper-slide v-for="(banner,index) in banners" :key="index">
<img  class="banner-img" :src="banner.src" @click="handleClick(banner.id)">
</swiper-slide>
<div class="swiper-pagination" slot-scope="pagination">{{banners.id}}</div>
</swiper>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  data () {
    return {
      banners: {},
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: false,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    }
  },
  created () {
    this.$http.get('./banner').then(res => {
      this.banners = res.data
      console.log(this.banners, 'banners数据')
    })
  },
  name: 'banner',
  components: {swiper, swiperSlide}
}
</script>

<style>
.swiper-wrapper{
      margin-top: 3rem;
      height: 15rem;
      width: 100%;
}
.banner-img{
  width: 100%;
  height: 100%;
}
</style>
