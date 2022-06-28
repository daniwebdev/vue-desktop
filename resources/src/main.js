import { createApp } from "vue";
import App from "./renderer/App.vue";

import "./assets/tailwind.css";

import "./assets/scss/index.scss";

import appstore from "./renderer/store";
import router from "./renderer/router";

// console.log(somevar);

const app = createApp(App);

app.use(appstore);
app.use(router);

app.mount("#app");

if (window.Neutralino != undefined) {
  // eslint-disable-next-line no-inner-declarations

  // window.Neutralino.init();
  // window.Neutralino.events.on("ready", async () => {
  //   window.Neutralino.os.showMessageBox("Welcome", "Hello Neutralinojs");
  //   await window.Neutralino.window.setDraggableRegion(
  //     document.querySelector(".drag")
  //   )
  // });

}
