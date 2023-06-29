<template>
  <div class="cart-list">
    <scroll class="ccontent" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item">
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'

import { mapGetters } from 'vuex';

export default {
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .ccontent {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }
  /* .cart-list {
    height: calc(100vh - 44px -49px - 40px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  } */
</style>