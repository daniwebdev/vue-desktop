import { createApp } from "vue";
import App from "./renderer/App.vue";

import "./assets/tailwind.css";

import "./assets/scss/index.scss";

import appstore from "./renderer/store";
import router from "./renderer/router";

var tauriAPI = undefined;

if(window.__TAURI_IPC__ instanceof Function) {
    tauriAPI = require('@tauri-apps/api');
}

const app = createApp(App);

// app.provide('$tauriAPI', tauriAPI);  // Providing to all components during app creation
app.config.globalProperties.$tauriAPI = tauriAPI;

app.use(appstore);
app.use(router);

app.mount("#app");
