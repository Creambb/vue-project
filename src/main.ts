import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 完整引入Element
import Element from 'element-ui'
// 按需引入Element
// import { Button } from 'element-ui'
import './element-variables.scss'

// 设置全局组件的尺寸size和弹框的初始zIndex(默认值:2000)
Vue.use(Element, { size: 'small', zIndex: 3000 })

// 按需引入Element时设置全局组件的值
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
