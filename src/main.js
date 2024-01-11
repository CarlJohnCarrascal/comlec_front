import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.css"

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/indexdb'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

// store.subscribe((mutation, state) => {
//     console.log(mutation)
//     localStorage.setItem('store', JSON.stringify(state))
// })