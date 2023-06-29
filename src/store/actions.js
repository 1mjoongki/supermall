import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  addCart(context, payLoad) {
    // 1.查找之前数组中是否有该商品
    //如何满足条件就返回
    let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)

    // 2.判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payLoad.count = 1
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}