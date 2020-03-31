import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Info from "@/components/Info.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "helloworld",
      component: HelloWorld
    },
    {
      path: "/info",
      name: "info",
      component: Info
    }
  ]
});
