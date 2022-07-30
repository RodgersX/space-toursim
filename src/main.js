import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import Header from "./components/toolbar.vue";

Vue.config.productionTip = false;

Vue.component("toolbar", Header);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
