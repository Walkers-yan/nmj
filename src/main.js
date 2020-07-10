import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件
import Vant from 'vant'
// 注册vant组件
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 动态适配REM
import 'amfe-flexible'

// 加载vant所有组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
