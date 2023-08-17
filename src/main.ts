import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./style/index.scss";

import { setupPlugin } from "./plugin/index";

const app = createApp(App);

setupPlugin(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
