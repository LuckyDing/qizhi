import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import axios from './axios'
import Cookies from 'vue-cookies'
// 样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/csshake-vertical.min.css'

Vue.config.productionTip = true
Vue.use(ElementUI)
Vue.use(Cookies)
/* eslint-disable no-new */
// 修改title
Vue.directive('title', {
  inserted: function (el, binding) {
    if (!el.dataset.title) {
      document.title = binding.value
    } else {
      document.title = el.dataset.title
    }
  }
})
// 查找字符串位置
Vue.prototype.$findPositionOfCharacter = (str, cha, num) => {
  let x = -1
  for (let i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1)
  }
  return x
}
Vue.prototype.$back = () => {
  router.go(-1)
}
Vue.prototype.$post = axios.post
Vue.prototype.$get = axios.get

router.beforeEach((to, from, next) => {
  console.log(sessionStorage.getItem('token'))
  if (sessionStorage.getItem('token')) {
    next()
  } else {
    if (to.path === '/') {
      next()
    } else {
      next('/')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
