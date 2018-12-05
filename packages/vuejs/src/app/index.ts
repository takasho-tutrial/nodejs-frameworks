import Vue from 'vue'

import Hello from './components/hello'

const app = new Vue({
  render: (h: any) => h(Hello)
})

app.$mount('#app')
