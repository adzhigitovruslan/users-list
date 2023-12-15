import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
import BaseCard from '@/components/ui/BaseCard.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.use(Toast);
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.component('base-card', BaseCard);

const loadimage = require('./assets/loader.gif');
const errorimage = require('./assets/error.png');

Vue.use(VueLazyload, {
  error: errorimage,
  loading: loadimage,
  attempt: 1,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
