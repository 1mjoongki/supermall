<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"></check-button>
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{ totalPrice }}
    </div>

    <div class="calculate">
      去计算({{ checkLength }})
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  display: flex;

  height: 40px;
  width: 100%;
  bottom: 49px;
  line-height: 40px;

  background-color: #eee;
  font-size: 14px;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}

.check-button {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
}

.calculate {
  position: absolute;
  width: 90px;
  background-color: red;
  text-align: center;
  color: #fff;
  right: 0;
}
</style>