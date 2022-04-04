import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import TuckerUI from '../packages'
import '../packages/icon/css/style.css'

Vue.use(TuckerUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
