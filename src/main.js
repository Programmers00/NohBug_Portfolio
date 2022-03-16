import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index' //router

import 'ag-grid-enterprise' //ag-grid enterprise function

createApp(App).use(router).mount('#app') //setting
