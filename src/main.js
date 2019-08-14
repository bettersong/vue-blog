
import Vue from 'vue'
import App from './App'
import router from './router' 
import Axios from 'axios';
import qs from 'qs';
Vue.prototype.axios = Axios
Vue.prototype.$qs = qs;
Vue.prototype.bus = new Vue(); //事件总线
Vue.config.productionTip = false
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

import global_ from './components/Global.vue'; //加载全局变量组件
Vue.prototype.GLOBAL = global_;     //挂载到vue的原型上
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/font.css';
import '../src/assets/css/timeline-component.css';
import '../static/css/globe.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
