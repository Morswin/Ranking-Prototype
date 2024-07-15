import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import LandingPage from "./views/LandingPage.vue";
import Ranking from "./views/Ranking.vue";
import Options from "./views/Options.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/ranking", component: Ranking },
  { path: "/options", component: Options },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).mount("#app");
