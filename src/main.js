import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'//第一步安装,第二部导入

import toast from '@/components/common/toast/index'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载插件(第三步use)
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
