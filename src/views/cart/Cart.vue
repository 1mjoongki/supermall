<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{ length }})
      </div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import CartList from '@/views/cart/childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

//mapGetters辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
// 从vuex中导入
import { mapGetters } from 'vuex';

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    //俩种语法
    // ...mapGetters(['cartLength',])
    ...mapGetters({
      length: 'cartLength',
    })
  },
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>