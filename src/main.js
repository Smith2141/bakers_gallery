import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "./style.css";
import 'materialize-css/dist/js/materialize.min'

createApp(App).use(store).mount("#app");
