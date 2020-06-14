console.log("hello vue!");

import Vue from "vue";
import App from "./app.vue";

new Vue({
  render: (createElement) => createElement(App),
}).$mount("#vue-app");
