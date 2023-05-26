<template>
  <div id="home">
    <NavBar class="home-nav"> <div slot="center">购物街</div></NavBar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue'

import {getHomeMultidata} from '@/network/home';



export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
 .home-nav {
  background-color: var(--color-tint);
  color: #fff;
 }
</style>