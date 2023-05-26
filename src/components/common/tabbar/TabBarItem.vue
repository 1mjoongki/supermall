<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>   
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
        path: String,
        activeColor: {
          type: String,
          default: 'red'
        }
      },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/cart) = false
      // /home -> item1(/category) = false
      // /home -> item1(/profile) = false
      //在当前处于活跃中的路由对是否存在this.path进行判断，有则返回true？无则返回false？
      return this.$route.path.indexOf(this.path) !== -1
      //另一种方法
      // return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-style: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>