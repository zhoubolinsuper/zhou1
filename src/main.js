import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myplugin from "./plugins/pl"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(myplugin)


import "./style/index.css"

if(process.env.NODE_ENV==='development'){
  require("./mock")
}

let vm=new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)
