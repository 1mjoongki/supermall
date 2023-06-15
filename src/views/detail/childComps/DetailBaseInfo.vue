<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="goods-price">
      <span class="goods-new-price">{{ goods.newPrice }}</span>
      <span class="goods-old-price">{{ goods.oldPrice }}</span>
      <span class="goods-discount">{{ goods.discount }}</span>
    </div>
    <div class="goods-columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="goods-services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 4vw;
  border-bottom: 4px solid #f2f5f8;
  padding: 0 8px 0 8px;
  color: #999;
}

.goods-title {
  color: #222;
}

.goods-price {
  margin-top: 15px;
  padding: 0 0 0 2px;
}

.goods-new-price {
  color: var(--color-high-text);
  font-size: 22px;
}

.goods-old-price {
  font-size: 14px;
  margin-left: 5px;
  text-decoration: line-through;
}

.goods-discount {
  background-color: var(--color-high-text);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  margin-left: 5px;
  position: relative;
  bottom: 8px;
  padding: 2px 5px;
}

.goods-columns {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f2f5f8;
  padding: 0 0 8px 0;
}

.goods-services {
  padding: 20px 0;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
}

.goods-services img{
  width: 14px;
  height: 14px;
}
</style>