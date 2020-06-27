import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Button } from 'vant';

Vue.use(Button);

Vue.use(Lazyload);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
