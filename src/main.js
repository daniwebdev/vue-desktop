import { createApp } from 'vue'
import App from './renderer/App.vue'

import './assets/tailwind.css'

import './assets/scss/index.scss'

import appstore from './renderer/store';
import router from './renderer/router'

// console.log(somevar);

const app = createApp(App)

app.use(appstore)
app.use(router)

app.mount('#app')