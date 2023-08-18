import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//App.vue 파일을 import 해온 뒤 렌더링 시키고, 파일 내의 id가 'app'인 element를 사용하겠다는 뜻
new Vue({
  render: h => h(App),
}).$mount('#app')
