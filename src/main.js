// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import App from "./App";
import router from "./router";
import auth from "./api/auth";
window.auth = auth;
import "./mock/index";
// element-ui

import Utils from "./helpers/utils";
Vue.use(Utils);
Vue.use(ElementUI);

import store from "./store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
