import { createApp } from "vue";
import App from "@/App.vue";
import Router from "@routers/index.js";

import "@configs/rem.js";
import "@configs/reset.css";
import "@configs/border.css";

createApp(App).use(Router).mount("#app");
